import { Observable } from "rxjs";
import { Clothes, Product } from "../clothes";

export abstract class ClothesGateway {
    abstract getClothes() : Observable<Clothes>
    abstract getClothesbyId(id:string): Observable<Product>
}