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
    var RegisterComponent;
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
            RegisterComponent = (function () {
                function RegisterComponent(router, userService) {
                    this.router = router;
                    this.userService = userService;
                    this.model = {};
                    this.loading = false;
                }
                RegisterComponent.prototype.addArticle = function () {
                    var _this = this;
                    this.userService.create(this.model)
                        .subscribe(function (data) {
                        _this.router.navigate(['/Home']);
                    });
                };
                RegisterComponent = __decorate([
                    core_1.Component({
                        // moduleId: module.id,
                        selector: 'register',
                        template: "\n  <h1>Register</h1>\n  <table align=\"center\">\n    <form class=\"ui large form segment\">\n \n <tr>\n  <td>\n <div class=\"field\">\n <label for=\"id\">Id:</label></div></td>\n <td><div><input name=\"id\"  #newid [(ngModel)]=\"model.id\" required> <!-- changed -->\n </div></td></tr>\n <tr>\n  <td>\n <div class=\"field\">\n <label for=\"name\">Name:</label></div></td>\n <td><div><input name=\"name\" #newname [(ngModel)]=\"model.name\" required> <!-- changed -->\n </div></td></tr>\n  <tr>\n  <td>\n <div class=\"field\">\n <label for=\"designation\">Designation:</label></div></td>\n <td><div><input name=\"designation\" #newdesignation [(ngModel)]=\"model.designation\" required> <!-- changed -->\n </div></td></tr>\n  <tr>\n  <td>\n <div class=\"field\">\n <label for=\"salary\">Salary:</label></div></td>\n <td><div><input name=\"salary\" #newsalary [(ngModel)]=\"model.salary\" required> <!-- changed -->\n </div></td></tr>\n  <tr>\n  <td>\n <div class=\"field\">\n <label for=\"email\">Email:</label></div></td>\n <td><div><input name=\"email\" #newemail [(ngModel)]=\"model.email\" required> <!-- changed -->\n </div></td></tr>\n  <tr>\n  <td></td><td>\n <!-- added this button -->\n <button (click)=\"addArticle(newid, newname, newurl, newsalary, newemail)\"\n class=\"ui positive right floated button\">\n Submit\n </button>\n</td></tr>\n </form>\n </table>\n ",
                        providers: [user_service_1.UserService],
                        styles: [" table, th , tr ,td{\n   border: 1px solid black;\n   ba\n}"]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, user_service_1.UserService])
                ], RegisterComponent);
                return RegisterComponent;
            }());
            exports_1("RegisterComponent", RegisterComponent);
        }
    }
});
//# sourceMappingURL=register.component.js.map