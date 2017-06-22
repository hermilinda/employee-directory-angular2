System.register(['angular2/core', './employee.service'], function(exports_1, context_1) {
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
    var core_1, employee_service_1;
    var HomeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (employee_service_1_1) {
                employee_service_1 = employee_service_1_1;
            }],
        execute: function() {
            HomeComponent = (function () {
                function HomeComponent(_employeeService) {
                    this._employeeService = _employeeService;
                }
                HomeComponent.prototype.ngOnInit = function () {
                    this.getEmployeelist();
                };
                HomeComponent.prototype.getEmployeelist = function () {
                    var _this = this;
                    this._employeeService.getEmployeeList()
                        .subscribe(function (employee) { return _this.employee = employee; }, function (error) { return _this.errorString = error; });
                };
                HomeComponent = __decorate([
                    core_1.Component({
                        selector: 'home-emp',
                        template: "<h3>Employee Directory</h3>\n \n   <table width=\"1000\">\n   <tr>\n   <th>Id</th>\n   <th>Name</th>\n   <th>Designation</th>\n   <th>Salary</th>\n   <th>Email</th>\n   </tr>\n   <tr  *ngFor=\"#emp of employee\">\n   <td>{{ emp.id }}</td>\n   <td>{{ emp.name }}</td>\n   <td>{{ emp.designation}}</td>\n   <td>{{ emp.salary }}</td>\n   <td>{{ emp.email }}</td>\n   </tr>\n</table>\n \n\n    ",
                        styles: [" table, th, td {\n   border: 1px solid black;\n}"],
                        providers: [employee_service_1.EmployeeService]
                    }), 
                    __metadata('design:paramtypes', [employee_service_1.EmployeeService])
                ], HomeComponent);
                return HomeComponent;
            }());
            exports_1("HomeComponent", HomeComponent);
        }
    }
});
//# sourceMappingURL=home.component.js.map