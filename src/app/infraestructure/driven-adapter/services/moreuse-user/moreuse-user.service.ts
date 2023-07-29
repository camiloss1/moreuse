import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usergateway } from 'src/app/domain/models/User/gateway/usergateway';
import { User } from 'src/app/domain/models/User/user';
import { Token } from 'src/app/domain/models/token';
import { GenericService } from '../helpers/generic.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MoreuseUserService extends Usergateway {

  private _url = environment.urlService;
  constructor(private genericService : GenericService) {
    super();
  }
  login(username: string,password: string): Observable<Token> {
    return this.genericService.post<Token>(this._url,'auth/login', {username,password })
  }
  register(user:User): Observable<User> {
    return this.genericService.post<User>(this._url,'users/add', user)
  }
}
