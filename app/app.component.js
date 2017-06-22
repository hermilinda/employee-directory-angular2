System.register(['angular2/core', './employee.service', 'angular2/router', './searchemployee.component', './home.component', './register.component'], function(exports_1, context_1) {
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
    var core_1, employee_service_1, router_1, searchemployee_component_1, home_component_1, register_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (employee_service_1_1) {
                employee_service_1 = employee_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (searchemployee_component_1_1) {
                searchemployee_component_1 = searchemployee_component_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (register_component_1_1) {
                register_component_1 = register_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n   <h3>Employee Directory</h3>\n \n<a [routerLink]=\"['Home']\"><b>Home</b></a>\n\n        <a [routerLink]=\"['Searchemployee']\"><b>SearchEmployee</b></a>\n        <a [routerLink]=\"['Register']\"><b>AddEmployee</b></a>\n\n<add-emp></add-emp>\n <router-outlet></router-outlet>\n   ",
                        styles: ["table { font-family: arial, sans-serif;\n    border-collapse: collapse;\n    width: 100%; }"],
                        providers: [employee_service_1.EmployeeService, register_component_1.RegisterComponent],
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        { path: '/home', component: home_component_1.HomeComponent, name: 'Home', useAsDefault: true },
                        { path: '/search', component: searchemployee_component_1.SearchEmployeeComponent, name: 'Searchemployee' },
                        { path: '/register', component: register_component_1.RegisterComponent, name: 'Register' }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map