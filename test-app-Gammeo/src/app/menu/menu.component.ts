import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { faCaretSquareDown, faComment, faHome, faQuestion, faUsers } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  contact = faComment;
  users = faUsers;
  faq = faQuestion;
  home = faHome;
  cube = faCaretSquareDown;

  @ViewChild(MatMenuTrigger) trigger!: MatMenuTrigger;

  constructor() { }

  ngOnInit(): void {
   // this.someMethod();
  }

  someMethod() {
    this.trigger.openMenu();
  }

}
