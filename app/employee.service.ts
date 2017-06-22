import {Injectable}     from 'angular2/core';
import {Http, Response} from 'angular2/http';

import {Employee}       from './employee';
import {Observable}     from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class EmployeeService {
  constructor(private http:Http) {

  }

  private _employeeUrl = 'http://localhost:8080/view-allemployee';

  getEmployeeList() {
    return this.http.get(this._employeeUrl)
                    .map(res => <Employee[]> res.json())
                    .catch(this.handleError);
  }

  private handleError (error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
