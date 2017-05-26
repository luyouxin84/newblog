import {Component, OnInit} from '@angular/core';
import * as Quill from './quill.min.js';
import {_type} from '../home/home.component';
import {httpHandle} from '../../common_method/http_handle';
import { AuthInject } from 'app/common_method/auth';

@Component({selector: 'app-write', templateUrl: './write.component.html', styleUrls: ['./write.component.scss']})
export class WriteComponent implements OnInit {
  editor : any;
  //上传和删除的链接
  uploadSaveUrl : string = "https://resources.lyxsblog.cn/lets_upload";
  uploadRemoveUrl : string = "removeUrl";
  uploadList : string[] = [];
  showSelectWin : boolean = false;
  private chooseImg : string;
  user : any = {};
  btn_disable:boolean = true;
  constructor(private http : httpHandle , private auth:AuthInject) {
    // console.log(this.auth);
  }

  ngOnInit() {

    var options = {
      // debug: 'info',
      modules: {
        toolbar: '#toolbar'
      },
      placeholder: 'Compose an epic...',
      readOnly: false,
      theme: 'snow'
    };
    this.editor = new Quill('#editor', options);
  }
  test() {
    console.log(this.editor.root.innerHTML);
    let o = document.getElementsByClassName('testdiv');
    o[0].innerHTML = this.editor.root.innerHTML;
  }
  //插入图片
  img() {
    console.log('active image handle');
    this.showSelectWin = true;
  }
  successEventHandler(x : any) {
    if (x.response.status == 200) {
      let o = JSON.parse(x.response._body);
      this
        .uploadList
        .push(o.fileSaveName);
    }
  }
  errorEventHandler(x : any) {
    alert('文件已经存在(小部分其他情况犯懒不做)')
  }
  closeSelect() {
    this.showSelectWin = false;
  }
  confirm(x : string) {
    this.chooseImg = x;
    console.log(x);
    this.editor.root.innerHTML += '<p style="text-align:center"><img src="https://resources.lyxsblog.cn/upload/' + this.chooseImg + '" alt="" style="max-widht:80vw;max-height:80vh;"/></p>';
    this.chooseImg = '';
    this.showSelectWin = false;
  }
  onSubmit(x : any) {
    console.log(x.valid);
    if (x.valid === true) {
      this.user.content = this.editor.root.innerHTML;
      let o = JSON.stringify(this.user);
      this.btn_disable = false;
      setTimeout(()=> {
        console.info('十秒激活延时');
        this.btn_disable = true;
      }, 10000);
      this.http.fetch_post('https://www.lyxsblog.cn/narticle', o,)
        .map(res => res.json())
        .subscribe(res => {
          console.info(res);
        }, err => {
          console.info(err);
        }, () => {
          alert('finish');
        })
    } else 
      (alert('数据不全'));
    }
  
}
