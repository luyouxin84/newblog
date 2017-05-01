import { NgModule  } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routerDeclarer:Routes = [
    //路由部分交由子模块处理了
]
@NgModule({
    imports:[RouterModule.forRoot(routerDeclarer)],
    exports:[RouterModule],

})
export class routerModule{}