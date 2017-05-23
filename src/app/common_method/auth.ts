import { Injectable } from '@angular/core';

@Injectable()
export class AuthInject{
    private _user = new user_stat();
    constructor(){
    };

    set login(x:boolean){
        this._user.isLogin = x;
    };
    get login(){
        return this._user.isLogin;
    };


}

class user_stat{
    isLogin:boolean;
    id:number;
    name:string;
    role:string;
    loginTime?:number;
    constructor(){
        this.isLogin = false;
        this.id = null;
        this.name = null;
        this.role = null;
        this.loginTime = new Date().getTime();
    }
}