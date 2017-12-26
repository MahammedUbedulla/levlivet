import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Doctor } from '../@model/doctorsList';
import {Observable} from 'rxjs/Observable';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class SearchResultsService {

     constructor (private http: Http) {}
    private url = 'http://localhost:3000/doctorsData'; 
     
     getDetails() : Observable<Doctor[]>{
         return this.http.get(this.url)
                         .map((res:Response) => res.json())
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
        
     }
}
