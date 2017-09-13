import { Component, Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Phone }              from '../classes/phone';

@Injectable()
export class PhoneDataService {

  _data: any

  constructor(private http: Http) {}

  getData() : Observable<Phone[]> {
    return this.http
      .get('../assets/data/feed.json')
      .map(this.extractData).catch(this.handleExceptions);
      
    
  }


  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }

  private handleExceptions(error: Response | any) {
    let errMsg: string;
        if (error instanceof Response) {
        const body = error.json() || '';
        const err = body.error || JSON.stringify(body);
        errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else 
    {
        errMsg = "An unexpected error has occured";
        console.error(errMsg);
        }
        
        return Observable.throw(errMsg);
    }
}
