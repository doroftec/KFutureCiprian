import { Component, Output, EventEmitter } from '@angular/core';

import { Router } from '@angular/router';

import { TranslateService } from 'ng2-translate/ng2-translate';

import { AppService } from '../shared/services/app.service';
import { DTService } from '../dtShared/dt.service';

@Component({
    moduleId: module.id,
    selector: 'navigation-menu',
    templateUrl: 'nav.cmp.html',
})

export class NavCmp {
    @Output() onTranslationChange = new EventEmitter();

    bRouteChanged: boolean;

    /*--------- Constructor --------*/
    constructor(
        private _translateService: TranslateService,
        private _appService: AppService,
        private _dtService: DTService,
        private _router: Router) {}

    /*--------- App logic --------*/
    matchDefaultLanguage(lang: string): boolean {
        return lang == this._appService.defaultLanguage;
    }

    changeLanguage(lang: string): void {
        this._appService.changeLang(lang);
    }

    /*--------- NG On Init ---------*/f
    ngOnInit() {
        this._translateService.use(this._appService.getStoredLanguage());

        this._appService.navLanguageChanged.subscribe(lang => {
            this._appService.changeLangTranslate(this._translateService, lang);
        });

        this._dtService.setInitCompanyCSS();
    }
}