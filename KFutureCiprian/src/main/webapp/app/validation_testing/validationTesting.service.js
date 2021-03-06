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
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
var ValidationTestingService = (function () {
    function ValidationTestingService(_http) {
        this._http = _http;
        this._baseUrl = 'rest/';
    }
    ValidationTestingService.prototype.testException = function (obj) {
        return this._http.post("test/forms", JSON.stringify(obj));
    };
    ValidationTestingService.prototype.handleError = function (error) {
        return Observable_1.Observable.throw(error || 'Server error');
    };
    ValidationTestingService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ValidationTestingService);
    return ValidationTestingService;
}());
exports.ValidationTestingService = ValidationTestingService;
//# sourceMappingURL=validationTesting.service.js.map