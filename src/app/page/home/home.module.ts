import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';

const home_router:Routes = [
  // { path:'home' , component:HomeComponent},
  // { path:'' , pathMatch:'full',redirectTo:'home'},
  // // { path: '404', loadChildren:'../notfound/notfound.module#NotfoundModule' },
  // { path: '**', redirectTo: '404' }
]
@NgModule({
  imports: [
    RouterModule.forChild(home_router)
  ],
  declarations: [HomeComponent],
  exports:[RouterModule],
  bootstrap:[HomeComponent]
})
export class HomeModule { }
