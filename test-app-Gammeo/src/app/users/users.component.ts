import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AddUserComponent } from '../add-user/add-user.component';

import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  //Liste utilisateur
  users$: Observable<any> | undefined;
  //Paginator
/*  length :number = 0;
  pageSize :number= 0;
  pageEvent: PageEvent | undefined;*/

  constructor(private userService: UserService,
              private router: Router,
              private dialog : MatDialog) { }

  ngOnInit(): void {
    this.getAllUsers();
/*    this.getPaginator();*/
  }

  onCreateUser() {
    //Configuration de la popup
    const dialogConfig = new MatDialogConfig();
    //Paramétrage fermeture
    dialogConfig.disableClose = true;
    // ?
    dialogConfig.autoFocus = true;
    //Taille de la popup
    dialogConfig.width = "75%";
    //Insertion component dans popup
    this.dialog.open(AddUserComponent, dialogConfig);
  }

  getAllUsers() {
    this.users$ = this.userService.getUsers()
      .pipe(
        map(info => {
          return info.data; 
        }))
  }

 /* getPaginator() {
    this.userService.getUsers()
      .pipe(
        map(info => {
          this.length = info.total;
          this.pageSize = info.per_page;
          return this.length;
        }))
  }*/

  onClickUser(id:string) {
    this.router.navigate(['/user/', id]);
  }



}
