import {Component, OnInit} from '@angular/core';

@Component({selector: 'app-home', templateUrl: './home.component.html', styleUrls: ['./home.component.scss']})
export class HomeComponent implements OnInit {
  content : obj = new obj();
  constructor() {}

  ngOnInit() {
    //生成文字内容
    let j:_type = {
      title: '外交部回应台湾缺席世卫大会',
        text: '环球时报-环球网报道 记者 姚丽娟]第70届世界卫生大会报名日期已经截止，台湾方面没有收到与会邀请。台方多次声称，大陆方面借卫生问题对台进行“政治打压”、',
        author: 'sina',
        time:'2017年5月9日'
    };
    let i:_type[]=[];
    i.push(j);
    i.push(j);
    i.push(j);
    i.push(j);
    i.push(j);
    i.push(j);
    this.content._data =  i;
  }
  //点击动画
  clickContent(x:any){
    x.style.position = 'relative';
    x.style.top = '10px';
    setTimeout(function(){
      x.style.position = '';
    },250);
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
interface _type {
  title : string,
  text : string,
  author?:string,
  time?:string
}