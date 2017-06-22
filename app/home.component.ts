import {Component} from 'angular2/core';
import {Employee} from './employee'
// import {BookmarkService} from './bookmark.service'
import {EmployeeService} from './employee.service'


@Component({

    selector: 'home-emp',
    template: `<h3>Employee Directory</h3>
 
   <table width="1000">
   <tr>
   <th>Id</th>
   <th>Name</th>
   <th>Designation</th>
   <th>Salary</th>
   <th>Email</th>
   </tr>
   <tr  *ngFor="#emp of employee">
   <td>{{ emp.id }}</td>
   <td>{{ emp.name }}</td>
   <td>{{ emp.designation}}</td>
   <td>{{ emp.salary }}</td>
   <td>{{ emp.email }}</td>
   </tr>
</table>
 

    `,
     styles: [` table, th, td {
   border: 1px solid black;
}`],
     providers: [EmployeeService]
})
export class HomeComponent{
  employee: Employee[];
  errorString: string;

  constructor(private _employeeService: EmployeeService){
  }

  ngOnInit() {
    this.getEmployeelist();
  }

  getEmployeelist() {
    this._employeeService.getEmployeeList()
                          .subscribe(
                            employee => this.employee = employee,
                            error => this.errorString = <any> error
                          );

                           
  }
 
  
}