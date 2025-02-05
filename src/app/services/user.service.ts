import { catchError, map, Observable, of } from 'rxjs';
import { Iuser } from './../interfaces/iuser';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private url: string = `http://localhost:3000/user`;

  constructor(private http: HttpClient) {}

  //get all users from server
  gatUsers(): Observable<Iuser[]> {
    return this.http.get<Iuser[]>(this.url).pipe(
      catchError((errror) => {
        console.log(errror);
        return of([]);
      })
    );
  }

  //check if user exists
  checkIfUsserExists(email: string): Observable<Boolean> {
    return this.gatUsers().pipe(
      map((users) => users.some((user) => user.email === email))
    );
  }

  //add user to server
  addUser(user: Iuser): Observable<Iuser> {
    return this.http.post<Iuser>(this.url, user);
  }
}
