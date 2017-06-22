System.register(['angular2/core', 'angular2/router', './user.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, user_service_1;
    var SearchEmployeeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            }],
        execute: function() {
            // import {json} from 'angular2';
            // import {UserService} from './user.service';
            // import {BookmarkService} from './searchemployee.service';
            SearchEmployeeComponent = (function () {
                function SearchEmployeeComponent(router, userService) {
                    this.router = router;
                    this.userService = userService;
                    this.model = {};
                }
                SearchEmployeeComponent.prototype.search = function () {
                    var _this = this;
                    this.userService.search(this.model)
                        .subscribe(function (employee) { return _this.employee = employee; }, function (error) { return _this.errorString = error; });
                    this.model.id = "";
                    this.model.name = "";
                    this.model.salary = "";
                    this.model.email = "";
                    this.model.designation = "";
                };
                SearchEmployeeComponent = __decorate([
                    core_1.Component({
                        selector: 'search-emp',
                        template: "<body><h1>Search Employee</h1>\n\n \n  <table align=\"center\">\n  <form class=\"ui large form segment\">\n  <tr>\n  <td>\n <div class=\"field\">\n <label for=\"id\">Id:</label></div></td>\n <td><div><input name=\"id\" #newid [(ngModel)]=\"model.id\"> <!-- changed -->\n </div>\n</td>\n</tr>\n<tr>\n<td>\n <div class=\"field\">\n <label for=\"name\">Name:</label></div></td>\n <td><div><input name=\"name\" #newname [(ngModel)]=\"model.name\" > <!-- changed -->\n </div></td></tr>\n <tr>\n <td>\n<div class=\"field\">\n <label for=\"designation\">Designation:</label></div></td>\n <td><div><input name=\"designation\" #newdesignation [(ngModel)]=\"model.designation\" > <!-- changed -->\n </div></td></tr>\n <tr>\n <td>\n <div class=\"field\">\n <label for=\"salary\">Salary:</label></div></td>\n <td><div><input name=\"salary\" #newsalary [(ngModel)]=\"model.salary\" > <!-- changed -->\n </div></td></tr>\n <tr>\n <td>\n <div class=\"field\">\n <label for=\"email\">Email:</label></div></td>\n <td><div><input name=\"email\" #newemail [(ngModel)]=\"model.email\" > <!-- changed -->\n </div></td></tr>\n <tr><td></td><td>\n <!-- added this button -->\n <button (click)=\"search(newid, newtitle, newurl, newsalary, newemail)\"\n class=\"ui positive right floated button\">\n Submit\n </button>\n </td></tr>\n </form>\n </table>\n<br><br><br><hr><br><br>\n <table width=\"1200\">\n   <tr>\n   <th>Id</th>\n   <th>Name</th>\n   <th>Designation</th>\n   <th>Salary</th>\n   <th>Email</th>\n   </tr>\n   <tr  *ngFor=\"#emp of employee\">\n   <td>{{ emp.id }}</td>\n   <td>{{ emp.name }}</td>\n   <td>{{ emp.designation}}</td>\n   <td>{{ emp.salary }}</td>\n   <td>{{ emp.email }}</td>\n   </tr>\n</table>\n</body>\n    ",
                        providers: [user_service_1.UserService],
                        styles: [" table, th , tr ,td{\n   border: 1px solid black;\n   ba\n}"]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, user_service_1.UserService])
                ], SearchEmployeeComponent);
                return SearchEmployeeComponent;
            }());
            exports_1("SearchEmployeeComponent", SearchEmployeeComponent);
        }
    }
});
//# sourceMappingURL=searchemployee.component.js.map