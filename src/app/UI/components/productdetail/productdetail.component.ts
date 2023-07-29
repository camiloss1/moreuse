import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/domain/models/Clothes/clothes';
import { Clothesusecase } from 'src/app/domain/models/Clothes/usecase/clothesusecase';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {
  constructor(private route: ActivatedRoute, private clothesUseCase: Clothesusecase) { }
  product!: Product
  ngOnInit(): void {
    var id = this.route.snapshot.paramMap.get('id');
    if (id) { this.getProductDetail(id); }
  }

  getProductDetail(id: string) {
    this.clothesUseCase.getClothesbyId(id).subscribe((data:Product) => {
      this.product = data;
    });
  }
}
