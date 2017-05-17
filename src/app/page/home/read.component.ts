import {Component, OnInit} from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { httpHandle } from '../../common_method/http_handle';

@Component({
    selector:'read',
    templateUrl: './read.component.html', 
    styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit{
    recive:any={};
    constructor(private _router:Router,private ar:ActivatedRoute,private http:httpHandle){}
    ngOnInit(){
        this.ar.params
        .subscribe(
            res => {
                console.log(res);
                let id = res.id;
                this.http.fetch_get('https://www.lyxsblog.cn/reading/'+id,)
                .map(res => res.json())
                .subscribe(
                    res => {
                        console.log(res);
                        this.recive = res[0];
                    },
                    err => {
                        console.info(err)
                    }
                )
            },
            err =>{
                console.log(err);
            }
        )
    }
}