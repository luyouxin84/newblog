import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { WriteComponent } from './write.component';

const Router : Routes = [
    { path:'',component:WriteComponent,pathMatch:'full' },
]
@NgModule({
    imports:[
        RouterModule.forChild(Router)
    ],
    exports:[RouterModule]    
})
export class writeRouterModule{}