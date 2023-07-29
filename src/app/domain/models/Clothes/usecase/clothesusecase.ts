import { Injectable } from "@angular/core";
import { ClothesGateway } from "../gateway/clothesgateway";
import { Observable } from "rxjs";
import { Clothes, Product } from "../clothes";

@Injectable({
    providedIn: 'root'
})
export class Clothesusecase {
    constructor(private _clothesGateway: ClothesGateway) { }
    getClothes(): Observable<Clothes> {
        //logica de la aplicación
        return this._clothesGateway.getClothes();
    }
    getClothesbyId(id:string): Observable<Product> {
        return this._clothesGateway.getClothesbyId(id);
    }
}
