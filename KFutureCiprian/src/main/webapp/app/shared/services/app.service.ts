import { Component, Inject, EventEmitter } from '@angular/core';
import { Injectable } from '@angular/core';
import { Headers, RequestOptions, Http, Response } from '@angular/http';

import { TranslateService } from 'ng2-translate/ng2-translate';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class AppService {
    private defaultAppTitle: string;

    private selectedErrorLogName: string;

    defaultLanguage: string;

    static bTokenExpired: boolean;

    static bLanguageLoading: boolean;

    languageChanged = new EventEmitter();

    bLanguageChangedSub: boolean;

    static languageChangeCompletedEmit = new EventEmitter();

    navLanguageChanged = new EventEmitter();

    constructor(
        private _http: Http,
        private _traslateService: TranslateService
    ) {
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
    getBTokenExpired(): boolean {
        return AppService.bTokenExpired;
    }

    /**
     * Get loading state of chaning language
     * @author DynTech
     */
    getBLanguageLoading(): boolean {
        return AppService.bLanguageLoading;
    }

    /**
     * Get default app title prefix
     * @author DynTech
     */
    getDefaultAppTitle(): string {
        return this.defaultAppTitle;
    }

    /**
     * Set default app title prefix
     * @author DynTech
     */
    setDefaultAppTitle(title: string): void {
        this.defaultAppTitle = title;
    }

    /**
     * Set default app language
     * @author DynTech
     */
    getStoredLanguage(): string {
        return localStorage.getItem('defaultLang');
    }

    /**
     * Set default app language
     * @author DynTech
     */
    setStoredLanguage(lang: string): void {
        localStorage.setItem('defaultLang', lang);
    }

    /**
     * Change language and emmit change
     * @author DynTech
     */
    changeLang(lang: string): void {
        AppService.bLanguageLoading = true;
        this.changeLangRest(lang).toPromise().then(() => {
            localStorage.setItem('defaultLang', lang);
            this.defaultLanguage = lang;

            this.languageChanged.emit(lang);

            this.navLanguageChanged.emit(lang);
        })
    }

    /**
     * Change languge by using translate reference from component with give lang
     * @author DynTech
     */
    changeLangTranslate(translate: TranslateService, lang: string, bDontEmit?: boolean): void {
        AppService.bLanguageLoading = true;
        translate.use(lang).toPromise().then(() => {
            AppService.bLanguageLoading = false;

            if (!bDontEmit) {
                AppService.languageChangeCompleted();
            }
        });
    }


    /**
     * Emit translation completion
     * @author DynTech
     */
    static languageChangeCompleted(): void {
        AppService.languageChangeCompletedEmit.emit();
    }

    /**
     * Unsubscribe from event emitters onDestroy component
     * @author DynTech
     */
    refreshEmitters(): void {
        AppService.languageChangeCompletedEmit.unsubscribe();
        this.languageChanged.unsubscribe();

        AppService.languageChangeCompletedEmit = new EventEmitter();
        this.languageChanged = new EventEmitter();
    }

    /**
     * Change language - REST
     * @author DynTech
     */
    private changeLangRest(lang: string): Observable<any> {
        return this._http.get('rest/translations/language/' + lang);
    }
}