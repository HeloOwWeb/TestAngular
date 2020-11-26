import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

//Module Material
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
//Components
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { AddUserComponent } from './add-user/add-user.component';
import { FAQComponent } from './faq/faq.component';
import { ProfilComponent } from './profil/profil.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
//Services
import { UserService } from './services/user.service';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    AddUserComponent,
    FAQComponent,
    ProfilComponent,
    FourOhFourComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule,
    MatPaginatorModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent],
  entryComponents: [AddUserComponent]
})
export class AppModule { }
