import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home.component';

const homeRouter:Routes = [
    { path:'',component:HomeComponent,pathMatch:'full' }
]
@NgModule({
    imports:[
        RouterModule.forChild(homeRouter)
    ],
    exports:[RouterModule]    
})
export class homeRouterModule{}