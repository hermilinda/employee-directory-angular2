// import { Injectable } from '@angular/core';
//  import { Http, Headers, RequestOptions, Response } from '@angular/http';
System.register(['angular2/core', 'angular2/http', 'rxjs/Observable', 'rxjs/Rx', 'rxjs/add/operator/map'], function(exports_1, context_1) {
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
    var core_1, http_1, Observable_1;
    var UserService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_1) {},
            function (_2) {}],
        execute: function() {
            UserService = (function () {
                function UserService(http) {
                    this.http = http;
                    this._addUrl = 'http://localhost:8080/add-employee';
                    this._searchUrl = 'http://localhost:8080/view-employee';
                }
                UserService.prototype.create = function (user) {
                    var req = JSON.stringify({
                        id: user.id,
                        name: user.name,
                        email: user.email,
                        designation: user.designation,
                        salary: user.salary
                    });
                    console.log(req);
                    var headers = new http_1.Headers();
                    headers.append('Accept', 'application/json');
                    headers.append('Content-Type', 'application/json');
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this.http.post(this._addUrl, req, options).map(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                UserService.prototype.search = function (user) {
                    var req = JSON.stringify({
                        id: user.id,
                        name: user.name,
                        email: user.email,
                        designation: user.designation,
                        salary: user.salary
                    });
                    console.log(req);
                    var headers = new http_1.Headers();
                    headers.append('Accept', 'application/json');
                    headers.append('Content-Type', 'application/json');
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this.http.post(this._searchUrl, req, options).map(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                UserService.prototype.handleError = function (error) {
                    console.error(error);
                    return Observable_1.Observable.throw(error.json().error || 'Server error');
                };
                UserService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], UserService);
                return UserService;
            }());
            exports_1("UserService", UserService);
        }
    }
});
//# sourceMappingURL=user.service.js.map