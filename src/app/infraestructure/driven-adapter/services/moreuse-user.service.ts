import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usergateway } from 'src/app/domain/models/User/gateway/usergateway';
import { User } from 'src/app/domain/models/User/user';
import { Token } from 'src/app/domain/models/token';

@Injectable({
  providedIn: 'root'
})
export class MoreuseUserService extends Usergateway {

  constructor(private http: HttpClient) {
    super();
  }
  login(username: string,password: string): Observable<Token> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<Token>('https://dummyjson.com/auth/login', {username,password }, { headers })
  }
  register(user:User): Observable<User> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<User>('https://dummyjson.com/users/add', {user}, { headers })
  }
}
