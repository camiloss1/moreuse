import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Clothes } from 'src/app/domain/models/Clothes/clothes';
import { Clothesusecase } from 'src/app/domain/models/Clothes/usecase/clothesusecase';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient, private clothesUseCase: Clothesusecase) { }
  name: string | undefined | null;
  clothes!: Clothes;
  ngOnInit(): void {
    this.getClothes();
    var token = localStorage.getItem('token')
    var headers;
    if (token) {

      headers = new HttpHeaders().set('authorization', 'Bearer ' + token);
    }
    const options = { headers: headers };
    this.http.get('https://run.mocky.io/v3/a8c2acbd-9623-4f26-bbd5-9106f53a3851', options).subscribe({
      next: (response: any) => {
        this.name = response.name;
      },
      error: (e) => console.error(e),
      complete: () => console.info('usuario obtenido')
    })
  }

  getClothes() {
    this.clothesUseCase.getClothes().subscribe((data: Clothes) => {
      this.clothes = data;
      console.log(this.clothes);
    })
  }
//  metodo(id:string){
//   this.router.navigate([`//default/productdetail/${id}`])
//  }
}
