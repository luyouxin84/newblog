import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { loginRouterModule } from './login.router';

@NgModule({
  imports: [
    CommonModule,
    loginRouterModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
