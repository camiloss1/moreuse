import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactusComponent } from './UI/components/contactus/contactus.component';
import { DefaultModule } from './UI/layouts/default/default.module';
import { LoginComponent } from './UI/components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactusComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DefaultModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
