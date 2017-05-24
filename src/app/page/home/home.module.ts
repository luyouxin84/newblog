import { NgModule } from '@angular/core';
import { homeRouterModule } from './homeRoute.module';
import { HomeComponent } from './home.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import {ReadComponent} from "app/page/home/read.component";
import { httpHandle } from '../../common_method/http_handle';
import { SearchComponent } from './search.component';

@NgModule({
  imports: [
    homeRouterModule,
    CommonModule
  ],
  declarations:[HomeComponent,ReadComponent,SearchComponent],
  providers:[httpHandle]
})
export class HomeModule { }
