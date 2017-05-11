import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './login.component';

const loginRouter : Routes = [
    { path:'',component:LoginComponent,pathMatch:'full' },
]
@NgModule({
    imports:[
        RouterModule.forChild(loginRouter)
    ],
    exports:[RouterModule]    
})
export class loginRouterModule{}