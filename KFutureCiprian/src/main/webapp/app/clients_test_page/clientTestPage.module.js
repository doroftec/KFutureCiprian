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
var ng2_dragula_1 = require('ng2-dragula/ng2-dragula');
var primeng_2 = require('primeng/primeng');
var clientTestPage_routes_1 = require('./clientTestPage.routes');
var utility_module_1 = require('../shared/modules/utility.module');
var clientsTestPageServices_1 = require('./clientsTestPageServices');
var clientsTestPage_cmp_1 = require('./clientsTestPage.cmp');
var primeng_3 = require('primeng/primeng');
var primeng_4 = require('primeng/primeng');
var ClientTestPageModule = (function () {
    function ClientTestPageModule() {
    }
    ClientTestPageModule = __decorate([
        core_1.NgModule({
            imports: [
                forms_1.ReactiveFormsModule,
                primeng_1.CalendarModule,
                primeng_1.DataScrollerModule,
                primeng_1.GrowlModule,
                primeng_1.MessagesModule,
                utility_module_1.UtilityModule,
                ng2_dragula_1.DragulaModule,
                primeng_2.DataGridModule,
                clientTestPage_routes_1.ROUTING,
                primeng_3.DropdownModule,
                primeng_4.PanelModule,
                primeng_1.ButtonModule,
                primeng_1.DialogModule,
                primeng_1.InputTextModule,
                primeng_1.InputSwitchModule,
                primeng_4.TabViewModule,
                primeng_4.InputMaskModule
            ],
            declarations: [
                clientsTestPage_cmp_1.ClientsTestPageCmp
            ],
            providers: [
                clientsTestPageServices_1.ClientsTestPageServices,
                ng2_dragula_1.DragulaService
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], ClientTestPageModule);
    return ClientTestPageModule;
}());
exports.ClientTestPageModule = ClientTestPageModule;
//# sourceMappingURL=clientTestPage.module.js.map