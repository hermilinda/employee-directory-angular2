import {Component } from 'angular2/core';
import {EmployeeService} from './employee.service';
import {Employee} from './employee';
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';
import {SearchEmployeeComponent} from './searchemployee.component';
import {HomeComponent} from './home.component';
import {RegisterComponent} from './register.component';


@Component({
   selector: 'my-app',
   template: `
   <h3>Employee Directory</h3>
 
<a [routerLink]="['Home']"><b>Home</b></a>

        <a [routerLink]="['Searchemployee']"><b>SearchEmployee</b></a>
        <a [routerLink]="['Register']"><b>AddEmployee</b></a>

<add-emp></add-emp>
 <router-outlet></router-outlet>
   `,
  styles: [`table { font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%; }`],
   providers: [EmployeeService, RegisterComponent],
   directives:[ROUTER_DIRECTIVES ]
})

 @RouteConfig([
   { path: '/home',                component: HomeComponent,        name: 'Home' , useAsDefault:true },
   { path: '/search',             component: SearchEmployeeComponent,         name: 'Searchemployee' },
    { path: '/register',             component: RegisterComponent,         name: 'Register' }
 
 ])

export class AppComponent {
  employee: Employee[];
  errorString: string;

}
