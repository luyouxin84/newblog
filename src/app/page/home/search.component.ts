import {Component, AfterViewInit} from '@angular/core';
import {httpHandle} from '../../common_method/http_handle';
import { ActivatedRoute } from '@angular/router';

@Component({selector: 'search', templateUrl: './search.component.html', styleUrls: ['./search.component.scss']})
export class SearchComponent implements AfterViewInit {
    reciveData:type[]=[];
    findout:boolean = false;
    constructor(private http : httpHandle,private ar:ActivatedRoute) {}
    ngAfterViewInit() {
        //索取参数
        let observer = {
            next: (value) => {
                //判断是否有数据
                if( !(value.length >0) ) {
                    return;
                }else this.findout = false;
                this.findout = true;
                for(let i of value){
                    this.reciveData.push(i);
                }
                console.log(this.reciveData);
            },
            error: (err : any) => {
                console.info(err)
            },
            complete: () => {}
        };
        this.ar.params.subscribe(
            res=> {
                if ( !res.kw ) {
                    alert('没有收到kw');
                    return ;                    
                }
                let kw = decodeURI(res.kw);
                console.log(kw);
                this.http.fetch_get('https://www.lyxsblog.cn/search_content?keyword=' + kw)
                    .map(res => res.json())
                    .subscribe(observer)
            },
            err=>{
                console.info(err);
            }
        );
    }

}

interface type {
    article_time ?: string;
    author ?: string;
    content : string;
    id : number;
    order ?: string;
    status ?: string;
    title ?: string;
    title_encodeuri ?: string;
}