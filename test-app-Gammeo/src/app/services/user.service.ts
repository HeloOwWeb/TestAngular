import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = 'https://reqres.in/api/users/';

  constructor(private httpClient: HttpClient) { }

  //Récuperer la liste des utilisateurs
  getUsers(): Observable<any> {
    return this.httpClient.get(this.url)
  }

  //Récuperer la liste des utilisateurs
  getOneUser(id: number): Observable<any> {
    return this.httpClient.get<any[]>(this.url + id);
  }
}
