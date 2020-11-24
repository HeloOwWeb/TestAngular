import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddUserComponent>) { }

  ngOnInit(): void {
  }

  onClose() {
    this.dialogRef.close();
  }
}
