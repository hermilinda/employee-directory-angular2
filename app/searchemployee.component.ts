import {Component} from 'angular2/core';
import {Employee} from './employee';
import { Router } from 'angular2/router';
import {UserService} from './user.service'
// import {json} from 'angular2';
// import {UserService} from './user.service';
// import {BookmarkService} from './searchemployee.service';

@Component({

    selector: 'search-emp',
    template: `<body><h1>Search Employee</h1>

 
  <table align="center">
  <form class="ui large form segment">
  <tr>
  <td>
 <div class="field">
 <label for="id">Id:</label></div></td>
 <td><div><input name="id" #newid [(ngModel)]="model.id"> <!-- changed -->
 </div>
</td>
</tr>
<tr>
<td>
 <div class="field">
 <label for="name">Name:</label></div></td>
 <td><div><input name="name" #newname [(ngModel)]="model.name" > <!-- changed -->
 </div></td></tr>
 <tr>
 <td>
<div class="field">
 <label for="designation">Designation:</label></div></td>
 <td><div><input name="designation" #newdesignation [(ngModel)]="model.designation" > <!-- changed -->
 </div></td></tr>
 <tr>
 <td>
 <div class="field">
 <label for="salary">Salary:</label></div></td>
 <td><div><input name="salary" #newsalary [(ngModel)]="model.salary" > <!-- changed -->
 </div></td></tr>
 <tr>
 <td>
 <div class="field">
 <label for="email">Email:</label></div></td>
 <td><div><input name="email" #newemail [(ngModel)]="model.email" > <!-- changed -->
 </div></td></tr>
 <tr><td></td><td>
 <!-- added this button -->
 <button (click)="search(newid, newtitle, newurl, newsalary, newemail)"
 class="ui positive right floated button">
 Submit
 </button>
 </td></tr>
 </form>
 </table>
<br><br><br><hr><br><br>
 <table width="1200">
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
</body>
    `,
    
     providers: [UserService],
     styles: [` table, th , tr ,td{
   border: 1px solid black;
   ba
}`]
})
export class SearchEmployeeComponent{
     employee: Employee[];
     model: any = {};
 errorString: string;
     constructor(
        private router: Router,
         private userService: UserService 
       
        ) { }



 search(){
     this.userService.search(this.model)
            .subscribe(
             
                            employee => this.employee = employee,
                            error => this.errorString = <any> error
                                 );
 
this.model.id="";
this.model.name="";
this.model.salary="";
this.model.email="";
this.model.designation="";

}
 

}