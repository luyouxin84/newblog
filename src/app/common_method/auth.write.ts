import {Injectable} from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import {Observable} from "rxjs";
import {AuthInject} from 'app/common_method/auth';
import { element } from 'protractor';

@Injectable()
export class AuthWrite implements CanActivate {
    constructor(private auth : AuthInject,private router:Router) {}

    canActivate(route : ActivatedRouteSnapshot, state : RouterStateSnapshot) : boolean {
        // console.log(this.auth.login);
        // console.log(route);
        // console.log(state);
        if (this.auth.login)        {
            return true;
        }else {
            alert('必须要登录啊！');
            this.router.navigate(['login']);
            return false;
        }
    }

}