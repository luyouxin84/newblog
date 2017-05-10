import {Component, OnInit} from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
    selector:'read',
    templateUrl: './read.component.html', 
    styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit{
    constructor(private _router:Router,private ar:ActivatedRoute){}
    ngOnInit(){
        this.ar.params
        .subscribe(
            res => {
                console.log(res);
            },
            err =>{
                console.log(err);
            }
        )
    }
}