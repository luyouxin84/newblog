import { NgModule } from '@angular/core';
import { homeRouterModule } from './homeRoute.module';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    homeRouterModule
  ],
  declarations:[HomeComponent]
})
export class HomeModule { }
