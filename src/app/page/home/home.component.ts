import {Component, OnInit , AfterViewInit} from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import { httpHandle } from '../../common_method/http_handle';
import {Injector} from '@angular/core';
import { AuthInject } from 'app/common_method/auth';

@Component({selector: 'app-home', templateUrl: './home.component.html', styleUrls: ['./home.component.scss']})
export class HomeComponent implements OnInit,AfterViewInit{
  content : obj = new obj();
  dirtycheck:boolean = false;
  _test:any;  
  constructor( private _router:Router,private ar:ActivatedRoute,private xhr:httpHandle,private auth:AuthInject) {
  }

  ngOnInit() {
    // console.log(
    //   this.ar.params
    //   .subscribe(
    //     res => {
    //       console.log(res);
    //     }
    //     )
    //   );
      // console.log(this.auth);
  }
  ngAfterViewInit(){
    let i:_type[]=[];
    //获取数据
    this.xhr.fetch_get('https://www.lyxsblog.cn/home_list')
    .map(res => res.json())
            .subscribe(res => {
                for(let j of res){
                  j.content = j.content.trim();
                  j.content = j.content.slice(0,65);
                  i.push(j);
                }
            }, err => {
                console.info(err);
            }, () => {});
    
    this.content._data =  i;
  }
  //点击动画
  clickContent(x:any,s:string){
    x.style.position = 'relative';
    x.style.top = '10px';
    setTimeout(()=>{
      x.style.position = '';
      // 转码
    this._router.navigate(['read',s], {relativeTo: this.ar})
    },100);
  }
  checkdirty(x:any){
    if( x.srcElement.value.length > 0){
      this.dirtycheck = true;
    }else {
      this.dirtycheck = false;
    }
  }
  search(x:string){
    let i = encodeURI(x);
    console.log(i);
    this._router.navigate(['search',i],{relativeTo:this.ar});
  }

}

class obj {
  private data : _type[] = [];
  get _data() : _type[] {
    return this.data;
  }
  set _data(x : _type[]) {
    this.data = x;
  }
}

export interface _type {
  title : string,
  content : string,
  author?:string,
  article_time?:string,
  title_encodeuri?:string,
  status?:string,
  order?:string,
  id?:string
}