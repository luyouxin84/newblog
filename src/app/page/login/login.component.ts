import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  ViewChild
} from '@angular/core';
import {NgModel} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
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
  test(){
  }
  
}
