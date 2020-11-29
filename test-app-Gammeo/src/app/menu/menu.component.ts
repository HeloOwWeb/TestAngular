import { Component, OnInit} from '@angular/core';
import { faComment, faHome, faQuestion, faUsers } from '@fortawesome/free-solid-svg-icons';

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

  constructor() { }

  ngOnInit(): void {
  }

}
