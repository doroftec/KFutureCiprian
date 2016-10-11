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
var ng2_file_upload_1 = require('../ng2-file-upload');
var fileUploadTest_services_1 = require('./fileUploadTest.services');
require('rxjs/Rx');
var core_2 = require('angular2-cookie/core');
var URL2 = 'https://evening-anchorage-3159.herokuapp.com/api/';
var URL = '/KFutureInternCiprian/rest/upload';
var FileUploadTestCmp = (function () {
    function FileUploadTestCmp(_fileUploadTestService, _cookieService) {
        this._fileUploadTestService = _fileUploadTestService;
        this._cookieService = _cookieService;
        this.hasBaseDropZoneOver = false;
        this.hasAnotherDropZoneOver = false;
        this.uploader = new ng2_file_upload_1.FileUploader({ url: URL, authToken: _cookieService.get('X-Auth-Token') });
    }
    FileUploadTestCmp.prototype.fileOverBase = function (e) {
        this.hasBaseDropZoneOver = e;
    };
    FileUploadTestCmp.prototype.fileOverAnother = function (e) {
        this.hasAnotherDropZoneOver = e;
    };
    // On init
    FileUploadTestCmp.prototype.ngOnInit = function () {
        this.uploadedFilesFromDb();
    };
    FileUploadTestCmp.prototype.uploadedFilesFromDb = function () {
        var _this = this;
        this._fileUploadTestService.getUploadedBlobsFiles().subscribe(function (arrOfFiles) { return _this.arrOfFiles = arrOfFiles; }, function (error) { return _this.errorMessage = error; });
    };
    //text/csv, application/pdf
    FileUploadTestCmp.prototype.downloadFile = function (data) {
        var blob = new Blob([data], { type: 'application/pdf' });
        var url = window.URL.createObjectURL(blob);
        saveAs(blob, 'test.pdf');
    };
    FileUploadTestCmp.prototype.downloadPDF = function (fileUpTest) {
        this._fileUploadTestService.downloadPDF(fileUpTest.id).subscribe(function (blob) {
            saveAs(blob, fileUpTest.fileName);
        });
    };
    FileUploadTestCmp.prototype.functie = function () {
        var mediaType = 'application/pdf';
        var filename = 'test.pdf';
        var blob = new Blob([this.dataBytes], { type: mediaType });
        saveAs(blob, filename);
    };
    FileUploadTestCmp = __decorate([
        core_1.Component({
            templateUrl: 'app/file_upload_test/fileUploadTest.cmp.html',
            styleUrls: ['app/file_upload_test/fileUploadTest.cmp.css']
        }), 
        __metadata('design:paramtypes', [fileUploadTest_services_1.FileUploadTestService, core_2.CookieService])
    ], FileUploadTestCmp);
    return FileUploadTestCmp;
}());
exports.FileUploadTestCmp = FileUploadTestCmp;
//# sourceMappingURL=fileUploadTest.cmp.js.map