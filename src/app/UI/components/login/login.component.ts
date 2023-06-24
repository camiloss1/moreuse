import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup ;
  public validationMessages = {
    email:[
      {type:'required',message:'Este campo es requerido'},
      {type:'email',message:'Este campo es de tipo email'}
    ]
  }
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['email', [
        Validators.required,
        Validators.email
      ]
      ],
      password: [
        '',[
          Validators.minLength(8),
          Validators.required,
          Validators.pattern(/^(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/gm)
        ]
      ]
    })
  }

  login(){

    if(this.loginForm.valid)
    {
      alert('Este formulario esta valido')
    }
    else
    {
      alert('Este formulario no es valido')
    }
  }
}
