"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var core_2 = require('angular2-cookie/core');
var LoginGuard = (function () {
    function LoginGuard(_cookieService) {
        this._cookieService = _cookieService;
        this.username = 'micko';
    }
    LoginGuard.prototype.canActivate = function () {
        return this.checkIfLoggedIn();
    };
    LoginGuard.prototype.checkIfLoggedIn = function () {
        var username;
        if (this._cookieService.get('username') != null) {
            username = this._cookieService.get('username');
        }
        if (username == null) {
            alert("LoginGuard: As guest you don't have access on this page!");
            return false;
        }
        else if (username != this.username) {
            alert("LoginGuard: This user has not access on this page!");
            console.log("LoginGuard: This user has not access on this page!");
            return false;
        }
        else if (username == this.username) {
            console.log("LoginGuard: This user has access on this page!");
            return true;
        }
    };
    LoginGuard = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [core_2.CookieService])
    ], LoginGuard);
    return LoginGuard;
}());
exports.LoginGuard = LoginGuard;
//# sourceMappingURL=loginGuard.js.map