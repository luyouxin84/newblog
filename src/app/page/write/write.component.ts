import {Component, OnInit} from '@angular/core';
import * as Quill from './quill.min.js';

@Component({selector: 'app-write', templateUrl: './write.component.html', styleUrls: ['./write.component.scss']})
export class WriteComponent implements OnInit {
  editor : any;
  //上传和删除的链接
  uploadSaveUrl : string = "https://resources.lyxsblog.cn/lets_upload";
  uploadRemoveUrl : string = "removeUrl";
  uploadList : string[] = [];
  showSelectWin:boolean = false;
  private chooseImg:string;
  constructor() {}

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
  closeSelect(){
    this.showSelectWin = false;
  }
  confirm(x:string){
    this.chooseImg = x;
    console.log(x);
    this.editor.root.innerHTML += '<img src="https://resources.lyxsblog.cn/upload/'+ this.chooseImg + '" alt="" class="content-img" style="max-widht:50vw;max-height:50vh"/>';
    this.chooseImg = ''    ;
    this.showSelectWin = false;    
  }

  }
