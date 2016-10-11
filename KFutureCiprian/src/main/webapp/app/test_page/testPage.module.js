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
var forms_1 = require('@angular/forms');
var primeng_1 = require('primeng/primeng');
var testPage_routes_1 = require('../test_page/testPage.routes');
var ng2_dragula_1 = require('ng2-dragula/ng2-dragula');
var primeng_2 = require('primeng/primeng');
var utility_module_1 = require('../shared/modules/utility.module');
var testPageServices_1 = require('./testPageServices');
var testPage_cmp_1 = require('./testPage.cmp');
var TestPageModule = (function () {
    function TestPageModule() {
    }
    TestPageModule = __decorate([
        core_1.NgModule({
            imports: [
                forms_1.ReactiveFormsModule,
                primeng_1.CalendarModule,
                primeng_1.DataScrollerModule,
                primeng_1.GrowlModule,
                primeng_1.MessagesModule,
                primeng_1.SelectButtonModule,
                testPage_routes_1.ROUTING,
                utility_module_1.UtilityModule,
                ng2_dragula_1.DragulaModule,
                primeng_2.DataGridModule,
            ],
            declarations: [
                testPage_cmp_1.TestPageCmp
            ],
            providers: [
                testPageServices_1.TestPageService,
                ng2_dragula_1.DragulaService
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], TestPageModule);
    return TestPageModule;
}());
exports.TestPageModule = TestPageModule;
//# sourceMappingURL=testPage.module.js.map