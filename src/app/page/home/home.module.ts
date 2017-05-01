import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from '../notfound/notfound.component';
const home_router:Routes = [
  { path:'' ,pathMatch:'full', component:HomeComponent},
  { path: '404', component: NotfoundComponent },
  { path: '**', redirectTo: '404' }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(home_router)
  ],
  declarations: [HomeComponent],
  exports:[RouterModule],
  bootstrap:[HomeComponent]
})
export class HomeModule { }
