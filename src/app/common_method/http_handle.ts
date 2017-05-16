import {Http} from "@angular/http";
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class httpHandle {
    constructor(public http : Http) {}
    fetch_get(url : string, option?: object) {
        let options = {};
        if (option) 
            options = option;
        return this.http.get(url, options);        

    }

}