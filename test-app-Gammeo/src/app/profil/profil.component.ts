import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit{

  constructor(private userService: UserService,
    private route: ActivatedRoute) {}

  id: number = 0;
  Fname!: string;
  Lname!: string;
  email!: string;
  avatar!: string;

  ngOnInit(): void {
    this.getId();
    this.getDatas(this.id);
  }

  getId() {
    this.route.params.subscribe(info => { return this.id = info.id; })
    return this.id;
  }

  getDatas(id: number) {
    this.userService.getOneUser(id)
      //se désabonne après la premier exécution
      .pipe(take(1))
      .subscribe(info => {
        const data = info.data;
        this.avatar = data.avatar;
        this.email = data.email;
        this.Fname = data.first_name;
        this.Lname = data.last_name;
      }, (error) => {
        console.log(error);
      });
  }
}
