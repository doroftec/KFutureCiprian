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
var fileUploadTest_routes_1 = require('../file_upload_test/fileUploadTest.routes');
var utility_module_1 = require('../shared/modules/utility.module');
var fileUploadTest_cmp_1 = require('./fileUploadTest.cmp');
var ng2_file_upload_1 = require('ng2-file-upload');
var fileUploadTest_services_1 = require('./fileUploadTest.services');
var http_1 = require('@angular/http');
var core_2 = require('angular2-cookie/core');
var primeng_1 = require('primeng/primeng');
var primeng_2 = require('primeng/primeng');
var dt_httpInterceptor_1 = require('../dtShared/dt.httpInterceptor');
var FileUploadTestModule = (function () {
    function FileUploadTestModule() {
    }
    FileUploadTestModule = __decorate([
        core_1.NgModule({
            imports: [
                fileUploadTest_routes_1.ROUTING,
                utility_module_1.UtilityModule,
                primeng_2.InputMaskModule,
                primeng_2.TabViewModule,
                primeng_2.InputSwitchModule,
                primeng_2.InputTextModule,
                primeng_2.DialogModule,
                primeng_2.ButtonModule,
                primeng_2.CalendarModule,
                primeng_2.DataScrollerModule,
                primeng_2.GrowlModule,
                primeng_2.MessagesModule,
                primeng_2.PanelModule,
                primeng_1.DataGridModule
            ],
            declarations: [
                fileUploadTest_cmp_1.FileUploadTestCmp,
                ng2_file_upload_1.FileSelectDirective,
                ng2_file_upload_1.FileDropDirective,
            ],
            providers: [fileUploadTest_services_1.FileUploadTestService, core_2.CookieService,
                {
                    provide: http_1.Http,
                    useFactory: function (backend, defaultOptions, cookieService) {
                        return new dt_httpInterceptor_1.DTHttpInterceptor(backend, defaultOptions, cookieService);
                    },
                    deps: [http_1.XHRBackend, http_1.RequestOptions, core_2.CookieService]
                }],
        }), 
        __metadata('design:paramtypes', [])
    ], FileUploadTestModule);
    return FileUploadTestModule;
}());
exports.FileUploadTestModule = FileUploadTestModule;
//# sourceMappingURL=fileUploadTest.module.js.map