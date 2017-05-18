import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { loginRouterModule } from './login.router';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    loginRouterModule,
    FormsModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
