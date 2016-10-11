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
var http_2 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
var FileUploadTestService = (function () {
    function FileUploadTestService(http) {
        this.http = http;
        this.header = new http_2.Headers();
        this.url = '/KFutureInternCiprian/rest/uploadedFiles';
        this.url2 = '/KFutureInternCiprian/rest/downloadPDF';
    }
    FileUploadTestService.prototype.getUploadedBlobsFiles = function () {
        return this.http.request(this.url)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    FileUploadTestService.prototype.downloadPDF = function (id) {
        return this.http.get("/KFutureInternCiprian/rest/downloadPDF/" + id, {
            responseType: http_1.ResponseContentType.Blob }).map(function (response) { return new Blob([response.blob()], { type: 'application/pdf' }); });
    };
    FileUploadTestService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    FileUploadTestService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], FileUploadTestService);
    return FileUploadTestService;
}());
exports.FileUploadTestService = FileUploadTestService;
//# sourceMappingURL=fileUploadTest.services.js.map