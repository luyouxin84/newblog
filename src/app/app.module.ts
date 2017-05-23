import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { routerModule } from './router';
import { HomeModule } from './page/home/home.module';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { AuthInject } from './common_method/auth';




@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routerModule,
    HomeModule,
    BrowserAnimationsModule,    
  ],
  providers: [AuthInject],
  bootstrap: [AppComponent]
})
export class AppModule { }
