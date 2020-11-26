import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { take } from 'rxjs/operators';
import { User } from '../models/User.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  userFormSign!: FormGroup;
  message!: boolean;

  constructor(public dialogRef: MatDialogRef<AddUserComponent>,
    private formBuilder: FormBuilder,
    private userService: UserService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.userFormSign = this.formBuilder.group({
      name: ['', Validators.required],
      job: ['']
    });
  }

  errRequired() {
    const name = this.userFormSign.controls.name;
    return name.touched && name.hasError('required');
  }

  onSubmit() {
    const formValue = this.userFormSign.value;
    const objectUser = new User(
      formValue['name'],
      formValue['job']
    );

    this.userService.postUser(objectUser)
      .pipe(take(1))
      .subscribe(
        response => {
          this.message = true;
          console.log(response);
          this.dialogRef.close();
        },
        error => {
          this.message = false;
          console.log("Une erreur est survenue: " + error.message);
        });
  }

  onClose() {
    this.dialogRef.close();
  }
}
