import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {NotfoundComponent} from './notfound.component';

const notfoundRouter : Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: NotfoundComponent
  }
]
@NgModule({
  imports: [CommonModule,
  RouterModule.forChild(notfoundRouter)], 
  declarations: [],
  exports:[RouterModule]
})
export class NotfoundRouterModule {}