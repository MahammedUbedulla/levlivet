import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { DischargeQueue } from '../@model/dischargeQueue ';
import {Observable} from 'rxjs/Observable';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class DischargeQueueService {

     constructor (private http: Http) {}
    private url = './assets/dischargeQueue.json'; 
     
     getDischageQuDetails() : Observable<DischargeQueue[]>{
         return this.http.get(this.url)
                         .map((res:Response) => res.json())
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
        
     }
}
