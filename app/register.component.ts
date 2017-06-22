import { Component } from 'angular2/core';
import { Router } from 'angular2/router';

import {  UserService } from './user.service';

@Component({
    // moduleId: module.id,
    selector: 'register',
 template :`
  <h1>Register</h1>
  <table align="center">
    <form class="ui large form segment">
 
 <tr>
  <td>
 <div class="field">
 <label for="id">Id:</label></div></td>
 <td><div><input name="id"  #newid [(ngModel)]="model.id" required> <!-- changed -->
 </div></td></tr>
 <tr>
  <td>
 <div class="field">
 <label for="name">Name:</label></div></td>
 <td><div><input name="name" #newname [(ngModel)]="model.name" required> <!-- changed -->
 </div></td></tr>
  <tr>
  <td>
 <div class="field">
 <label for="designation">Designation:</label></div></td>
 <td><div><input name="designation" #newdesignation [(ngModel)]="model.designation" required> <!-- changed -->
 </div></td></tr>
  <tr>
  <td>
 <div class="field">
 <label for="salary">Salary:</label></div></td>
 <td><div><input name="salary" #newsalary [(ngModel)]="model.salary" required> <!-- changed -->
 </div></td></tr>
  <tr>
  <td>
 <div class="field">
 <label for="email">Email:</label></div></td>
 <td><div><input name="email" #newemail [(ngModel)]="model.email" required> <!-- changed -->
 </div></td></tr>
  <tr>
  <td></td><td>
 <!-- added this button -->
 <button (click)="addArticle(newid, newname, newurl, newsalary, newemail)"
 class="ui positive right floated button">
 Submit
 </button>
</td></tr>
 </form>
 </table>
 `,
 providers: [UserService],
   styles: [` table, th , tr ,td{
   border: 1px solid black;
   ba
}`]
  
})

export class RegisterComponent {
    model: any = {};
    loading = false;

    constructor(
        private router: Router,
         private userService: UserService 
        
        ) { }

    addArticle() {
        
             this.userService.create(this.model)
            .subscribe(
                data => {
                   this.router.navigate(['/Home']);
                            }
                  );
    }
}