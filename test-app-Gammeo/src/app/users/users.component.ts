import { BreakpointObserver } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnInit, Type, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { AddUserComponent } from '../add-user/add-user.component';

import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  //Message connexion
  message!: boolean;
  //Création de a source des données (!) ordre visuel des colonnes
  dataSource!: MatTableDataSource<any>;
  displayedColumns: string[] = ['firstname', 'lastname', 'avatar'];
  //Paginator 
  @ViewChild('pagination') paginator!: MatPaginator;
  total!: number;
  perPage!: number;
  middle!: number;
  //Taille fenetre modal
  widthDialogu: string = "100%";
  heightDialogu: string = "75%";

  constructor(private userService: UserService,
    private cdr: ChangeDetectorRef,
    private router: Router, private dialog: MatDialog, public breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    this.getUsers();
    this.dialogWidthHeight();
  }

  dialogWidthHeight() {
    if (this.breakpointObserver.isMatched('(min-width: 768px && max-width: 1439px)')) {
      this.widthDialogu = "50%";
      this.heightDialogu = "60%";
    } else if (this.breakpointObserver.isMatched('(min-width: 1440px)')) {
      this.widthDialogu = "30%";
      this.heightDialogu = "65%";
    }
  }

  onCreateUser() {
    //Configuration de la fenetre modal
    const dialogConfig = new MatDialogConfig();
    //Paramétrage fermeture - click en dehors accepte
    dialogConfig.disableClose = false;
    // Paramétrage ouvert
    //focus sur le premier champs
    dialogConfig.autoFocus = true;
    //Taille de la popup
    dialogConfig.width = this.widthDialogu;
    dialogConfig.height= this.heightDialogu;
    //Insertion component dans popup
    this.dialog.open(AddUserComponent, dialogConfig);
  }

  getUsers() {
    this.userService.getUsers()
      .pipe(take(1))
      .subscribe(info => {
        this.message = true;
        //Pour pouvoir observer que la pagination fonctionne bien j'ai mis une valeur fixe
        //Normalement, il récupère l'information du serveur : info.per_page (qui est = à 6)
        this.perPage = 3;
        this.total = info.total;
        this.middle = Math.round(this.total / 2);
        this.dataSource = new MatTableDataSource(info.data);
        //Détection des modifications
        this.cdr.detectChanges();
        //Datasource et affichage liée à la pagination
        this.dataSource.paginator = this.paginator;
      }, (error) => { console.log('Une erreur est survenue: ',error); this.message = false;});
  }

  onClickUser(row: any) {
    const id = row.id;
    this.router.navigate(['/user/', id]);
  }

  close() {
    console.log("delete DIV");
  }
}
