import {Component, OnInit, EventEmitter, Output, ViewChild} from '@angular/core';
import {NgModel} from "@angular/forms";
import * as sjcl from './sjcl.js';
import { httpHandle } from '../../common_method/http_handle';
import { Router } from '@angular/router';
import { AuthInject } from '../../common_method/auth';

@Component({selector: 'app-login', templateUrl: './login.component.html', styleUrls: ['./login.component.scss']})
export class LoginComponent implements OnInit {
  name : string;
  pass : string;
  private key:string = '';
  constructor( private _http:httpHandle , private _router:Router , private auth:AuthInject) {
    console.log(this.auth);
  }
  @ViewChild('pas')_pass : NgModel;

  ngOnInit() {
    this._http.fetch_get('https://www.lyxsblog.cn/get_dist_key_login')
    .map( res => res.json())
    .subscribe(
      res => { 
        this.key = res.cle;
        // console.log(this.key);
    },
      err => { console.info(err)}
    )
  }
  submit() {
    if ( this.key == ''){
      alert('验证服务器无效');
      return;
    }
    // console.log(sjcl['encrypt']);
    let pass_handel = sjcl['encrypt'](this.key,this.pass);
    // console.log(pass_handel);
    // it's string
    // console.log(typeof(pass_handel));    
    var ciphertext = sjcl['encrypt'](this.key, this.name + pass_handel);
    // console.log(ciphertext);
    this._http.fetch_post('https://www.lyxsblog.cn/login_up',ciphertext)
    .map( res => res.json())
    .subscribe(
      res=>{
        if (res.result === 'sucess'){
          // this._router.navigate(["/home",{login:true}])
          this.auth.login = true;
          this._router.navigate(["/home"]);
          console.log(this.auth.login)
        };
      },
      err =>{
        console.info(err)
      }
    )
  }
  test() {}

}

