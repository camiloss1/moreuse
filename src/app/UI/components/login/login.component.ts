import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  public validationMessages = {
    email: [
      { type: 'required', message: 'Este campo es requerido' },
      { type: 'email', message: 'Este campo es de tipo email' }
    ],
    password: [
      { type: 'required', message: 'Este campo es requerido' },
      { type: 'minlength', message: 'Este campo es debe contener por lo menos 8 caracteres' },
      { type: 'pattern', message: 'Este campo debe contener por lo menos 1 mayuscula y una minuscula' }
    ]
  }
  constructor(private formBuilder: FormBuilder, private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['email', [
        Validators.required,
        Validators.email
      ]
      ],
      password: [
        '', [
          Validators.minLength(8),
          Validators.required,
          Validators.pattern(/^(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/gm)
        ]
      ]
    })
  }

  login() {
    var correo = this.loginForm.controls['email'].value;
    var password = this.loginForm.controls['password'].value;
    
    this.http.post('https://run.mocky.io/v3/1758a518-3a80-45c9-bf46-13c22f40370d', { email: correo, contraseña: password }).subscribe({
      next: (response: any) => {
        localStorage.setItem('message', response.message)
        console.log(this.loginForm.valid)
        if (this.loginForm.valid) {
          localStorage.setItem('token', correo + password);

        }
        else {
          alert('Este formulario no es valido');
        }
      },
      error: (e) => console.error(e),
      complete: () => this.router.navigate(['/'])
    })

  }

  public get campos() {
    return this.loginForm.controls
  }
}
