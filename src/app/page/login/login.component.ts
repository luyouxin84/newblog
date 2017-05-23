import {Component, OnInit, EventEmitter, Output, ViewChild} from '@angular/core';
import {NgModel} from "@angular/forms";
import * as sjcl from './sjcl.js';
import { httpHandle } from '../../common_method/http_handle';

  templateUrl: './login.component.html',
})
@Component({selector: 'app-login', templateUrl: './login.component.html', styleUrls: ['./login.component.scss']})
export class LoginComponent implements OnInit {
  name:string;
  pass:string;
  constructor() { }
  @ViewChild('pas') _pass:NgModel;


  ngOnInit() {
  }
  submit(x:any){
    console.log(x);
  }
  @ViewChild('pas')_pass : NgModel;

  ngOnInit() {}
  submit() {
    console.log(sjcl['encrypt']);
    let pass_handel = sjcl['encrypt']("password",this.pass);
    console.log(pass_handel);
    // it's string
    // console.log(typeof(pass_handel));    
    var ciphertext = sjcl['encrypt']("password", this.name + pass_handel);
    console.log(ciphertext);
    this._http.fetch_post('https://www.lyxsblog.cn/login_up',ciphertext)
    .map( res => res.json())
    .subscribe(
      res=>{
        console.log(res);
      },
      err =>{
        console.info(err)
      }
    )
  }
  test() {}

}

