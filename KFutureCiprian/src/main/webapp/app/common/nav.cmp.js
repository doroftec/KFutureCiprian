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
var router_1 = require('@angular/router');
var ng2_translate_1 = require('ng2-translate/ng2-translate');
var app_service_1 = require('../shared/services/app.service');
var dt_service_1 = require('../dtShared/dt.service');
var core_2 = require('angular2-cookie/core');
var login_cmp_1 = require('../login/login.cmp');
var navchange_service_1 = require('./navchange.service');
var login_service_1 = require('../login/login.service');
var NavCmp = (function () {
    /*--------- Constructor --------*/
    function NavCmp(_translateService, _appService, _dtService, _router, _cookieService, _navchangeService, _loginService) {
        var _this = this;
        this._translateService = _translateService;
        this._appService = _appService;
        this._dtService = _dtService;
        this._router = _router;
        this._cookieService = _cookieService;
        this._navchangeService = _navchangeService;
        this._loginService = _loginService;
        this.onTranslationChange = new core_1.EventEmitter();
        this._navchangeService.navchange.subscribe(function (status) { _this.isMickoUser = status; console.log('Status is:' + status); });
    }
    /*--------- App logic --------*/
    NavCmp.prototype.matchDefaultLanguage = function (lang) {
        return lang == this._appService.defaultLanguage;
    };
    NavCmp.prototype.changeLanguage = function (lang) {
        this._appService.changeLang(lang);
    };
    NavCmp.prototype.checkRoute = function (urlRoute) {
        if (this._loginService.arrOfRoutesPerUser != null) {
            for (var _i = 0, _a = this._loginService.arrOfRoutesPerUser; _i < _a.length; _i++) {
                var routeUser = _a[_i];
                if (urlRoute == routeUser) {
                    return true;
                }
            }
        }
        return false;
    };
    NavCmp.prototype.ngOnInit = function () {
        var _this = this;
        var username = 'micko';
        if (this._cookieService.get('username') == username) { }
        this.isMickoUser = false;
        this._translateService.use(this._appService.getStoredLanguage());
        this._appService.navLanguageChanged.subscribe(function (lang) {
            _this._appService.changeLangTranslate(_this._translateService, lang);
        });
        this._dtService.setInitCompanyCSS();
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], NavCmp.prototype, "onTranslationChange", void 0);
    NavCmp = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'navigation-menu',
            templateUrl: 'nav.cmp.html',
            entryComponents: [login_cmp_1.LoginCmp]
        }), 
        __metadata('design:paramtypes', [ng2_translate_1.TranslateService, app_service_1.AppService, dt_service_1.DTService, router_1.Router, core_2.CookieService, navchange_service_1.NavChangeService, login_service_1.LoginService])
    ], NavCmp);
    return NavCmp;
}());
exports.NavCmp = NavCmp;
//# sourceMappingURL=nav.cmp.js.map