import { NgModule } from '@angular/core';
import { homeRouterModule } from './homeRoute.module';
import { HomeComponent } from './home.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  imports: [
    homeRouterModule,CommonModule
  ],
  declarations:[HomeComponent]
})
export class HomeModule { }
