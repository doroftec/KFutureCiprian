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
var platform_browser_1 = require('@angular/platform-browser');
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var core_2 = require('angular2-cookie/core');
var dt_service_1 = require('../../dtShared/dt.service');
var pipes_module_1 = require('../modules/pipes.module');
var UtilityModule = (function () {
    function UtilityModule() {
    }
    UtilityModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                pipes_module_1.PipesModule
            ],
            exports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                pipes_module_1.PipesModule
            ],
            providers: [
                core_2.CookieService,
                platform_browser_1.Title,
                dt_service_1.DTService,
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], UtilityModule);
    return UtilityModule;
}());
exports.UtilityModule = UtilityModule;
//# sourceMappingURL=utility.module.js.map