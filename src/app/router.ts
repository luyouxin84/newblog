import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AuthWrite } from './common_method/auth.write';

const routerDeclarer : Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    }, {
        path: 'home',
        loadChildren: './page/home/home.module#HomeModule'
    }, {
        path: '404',
        loadChildren: './page/notfound/notfound.module#NotfoundModule'
    }, {
        path: 'login',
        loadChildren: './page/login/login.module#LoginModule'
    }, {
        path: 'write',
        loadChildren: './page/write/write.module#WriteModule',
        canActivate:[AuthWrite]
    }, {
        path: '**',
        redirectTo: '404'
    }
]
@NgModule({
    imports: [RouterModule.forRoot(routerDeclarer)],
    exports: [RouterModule]
})
export class routerModule {}