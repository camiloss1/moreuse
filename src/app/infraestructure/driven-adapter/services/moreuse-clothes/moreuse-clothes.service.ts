import { Injectable } from '@angular/core';
import { Clothes, Product } from 'src/app/domain/models/Clothes/clothes';
import { GenericService } from '../helpers/generic.service';
import { environment } from 'src/environments/environment';
import { ClothesGateway } from 'src/app/domain/models/Clothes/gateway/clothesgateway';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoreuseClothesService extends ClothesGateway {
  private _url = environment.urlService;
  constructor(private genericService: GenericService) {
    super();
  }

  getClothes(): Observable<Clothes> {
    return this.genericService.get<Clothes>(this._url, 'products')
  }
  getClothesbyId(id:string): Observable<Product> {
    return this.genericService.get<Product>(this._url, 'products',id.toString())
  }
}
