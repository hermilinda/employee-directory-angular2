// import { Injectable } from '@angular/core';
//  import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { User } from './user';

// import {Observable}     from 'rxjs/Observable';
import {Injectable}     from 'angular2/core';
import {Http, Response , RequestOptions , Request ,Headers , RequestMethod} from 'angular2/http';
import { RequestOptionsArgs } from 'angular2/http';


import {Employee}       from './employee';
import {Observable}     from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
@Injectable()
export class UserService {

    
  constructor(private http:Http) {

  }

  private _addUrl = 'http://localhost:8080/add-employee';
  private _searchUrl = 'http://localhost:8080/view-employee';
  

  create(user: Employee) {

      
        let req :any = JSON.stringify({
        id: user.id,
        name: user.name,
        email: user.email,
        designation: user.designation,
        salary:user.salary
      });
      console.log(req);
    
    
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
  

    let options = new RequestOptions({ headers: headers });
    
        return this.http.post(this._addUrl , req , options)  .map(res => <Employee[]> res.json())
                    .catch(this.handleError);
                    
 
  }

    search(user: Employee) {

        let req :any = JSON.stringify({
        id: user.id,
        name: user.name,
        email: user.email,
        designation: user.designation,
        salary:user.salary
      });
      console.log(req);
    
    
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
  

    let options = new RequestOptions({ headers: headers });
    
        return this.http.post(this._searchUrl , req , options)  .map(res => <Employee[]> res.json())
                    .catch(this.handleError);
    }



  private handleError (error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }



}