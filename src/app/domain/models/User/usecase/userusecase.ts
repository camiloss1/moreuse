import { Injectable } from "@angular/core";
import { Usergateway } from "../gateway/usergateway";
import { Observable } from "rxjs";
import { Token } from "../../token";
import { User } from "../user";

@Injectable({
    providedIn: 'root'
})
export class Userusecase {
    constructor(private _userGateway : Usergateway){}
    //Todo lo relacionado con la logica de mi aplicación (Necesito encriptar un dato)
    //Single responsability
    login(username: string,password: string) : Observable<Token> {
        var passwordEncrypt = this.encriptar(password);
        return this._userGateway.login(username,passwordEncrypt);
    }

    encriptar(password: string) {
        //solo la logica de encriptación
        return password;
    }

    register(user:User) : Observable<User> {
        return this._userGateway.register(user);
    }
}
