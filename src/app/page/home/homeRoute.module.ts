import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home.component';
import {ReadComponent} from "app/page/home/read.component";
import { SearchComponent } from './search.component';

const homeRouter : Routes = [
    { path:'',component:HomeComponent,pathMatch:'full' },
    { path:'read/:id',component:ReadComponent,pathMatch:'full' },
    { path:'search/:kw',component:SearchComponent,pathMatch:'full' }
]
@NgModule({
    imports:[
        RouterModule.forChild(homeRouter)
    ],
    exports:[RouterModule]    
})
export class homeRouterModule{}