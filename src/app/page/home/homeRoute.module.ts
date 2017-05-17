import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home.component';
import {ReadComponent} from "app/page/home/read.component";

const homeRouter : Routes = [
    { path:'',component:HomeComponent,pathMatch:'full' },
    { path:'read/:id',component:ReadComponent,pathMatch:'full' }
]
@NgModule({
    imports:[
        RouterModule.forChild(homeRouter)
    ],
    exports:[RouterModule]    
})
export class homeRouterModule{}