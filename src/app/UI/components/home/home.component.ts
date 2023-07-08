import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    this.prueba(localStorage.getItem('message'));
  }

  name: string | undefined | null;

  prueba(name: string | undefined | null) {
    var token = localStorage.getItem('token')
    var headers;
    if (token) {

      headers = new HttpHeaders().set('authorization', token);
    }
    const options = { headers: headers };

    if (name == '') {
      this.name = 'Juan Salazar';
    }
    else {
      this.name = name;
    }
  }


}
