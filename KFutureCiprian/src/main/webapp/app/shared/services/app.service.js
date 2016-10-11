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
var core_2 = require('@angular/core');
var http_1 = require('@angular/http');
var ng2_translate_1 = require('ng2-translate/ng2-translate');
var AppService = (function () {
    function AppService(_http, _traslateService) {
        this._http = _http;
        this._traslateService = _traslateService;
        this.languageChanged = new core_1.EventEmitter();
        this.navLanguageChanged = new core_1.EventEmitter();
        this.defaultAppTitle = 'KFuture | ';
        this.defaultLanguage = this.getStoredLanguage() || 'en';
        AppService.bTokenExpired = false;
        AppService.bLanguageLoading = false;
        this.bLanguageChangedSub = false;
    }
    /**
     * Get default app title prefix
     * @author DynTech
     */
    AppService.prototype.getBTokenExpired = function () {
        return AppService.bTokenExpired;
    };
    /**
     * Get loading state of chaning language
     * @author DynTech
     */
    AppService.prototype.getBLanguageLoading = function () {
        return AppService.bLanguageLoading;
    };
    /**
     * Get default app title prefix
     * @author DynTech
     */
    AppService.prototype.getDefaultAppTitle = function () {
        return this.defaultAppTitle;
    };
    /**
     * Set default app title prefix
     * @author DynTech
     */
    AppService.prototype.setDefaultAppTitle = function (title) {
        this.defaultAppTitle = title;
    };
    /**
     * Set default app language
     * @author DynTech
     */
    AppService.prototype.getStoredLanguage = function () {
        return localStorage.getItem('defaultLang');
    };
    /**
     * Set default app language
     * @author DynTech
     */
    AppService.prototype.setStoredLanguage = function (lang) {
        localStorage.setItem('defaultLang', lang);
    };
    /**
     * Change language and emmit change
     * @author DynTech
     */
    AppService.prototype.changeLang = function (lang) {
        var _this = this;
        AppService.bLanguageLoading = true;
        this.changeLangRest(lang).toPromise().then(function () {
            localStorage.setItem('defaultLang', lang);
            _this.defaultLanguage = lang;
            _this.languageChanged.emit(lang);
            _this.navLanguageChanged.emit(lang);
        });
    };
    /**
     * Change languge by using translate reference from component with give lang
     * @author DynTech
     */
    AppService.prototype.changeLangTranslate = function (translate, lang, bDontEmit) {
        AppService.bLanguageLoading = true;
        translate.use(lang).toPromise().then(function () {
            AppService.bLanguageLoading = false;
            if (!bDontEmit) {
                AppService.languageChangeCompleted();
            }
        });
    };
    /**
     * Emit translation completion
     * @author DynTech
     */
    AppService.languageChangeCompleted = function () {
        AppService.languageChangeCompletedEmit.emit();
    };
    /**
     * Unsubscribe from event emitters onDestroy component
     * @author DynTech
     */
    AppService.prototype.refreshEmitters = function () {
        AppService.languageChangeCompletedEmit.unsubscribe();
        this.languageChanged.unsubscribe();
        AppService.languageChangeCompletedEmit = new core_1.EventEmitter();
        this.languageChanged = new core_1.EventEmitter();
    };
    /**
     * Change language - REST
     * @author DynTech
     */
    AppService.prototype.changeLangRest = function (lang) {
        return this._http.get('rest/translations/language/' + lang);
    };
    AppService.languageChangeCompletedEmit = new core_1.EventEmitter();
    AppService = __decorate([
        core_2.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, ng2_translate_1.TranslateService])
    ], AppService);
    return AppService;
}());
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map