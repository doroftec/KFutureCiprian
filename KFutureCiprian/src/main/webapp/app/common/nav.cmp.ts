import { Component, Output, EventEmitter  } from '@angular/core';

import { Router } from '@angular/router';

import { TranslateService } from 'ng2-translate/ng2-translate';

import { AppService } from '../shared/services/app.service';
import { DTService } from '../dtShared/dt.service';

import { CookieService } from 'angular2-cookie/core';

import { LoginCmp } from '../login/login.cmp';

import { NavChangeService } from './navchange.service';

import { LoginService } from '../login/login.service';

@Component({
    moduleId: module.id,
    selector: 'navigation-menu',
    templateUrl: 'nav.cmp.html',
    entryComponents:[LoginCmp]
})

export class NavCmp {
    @Output() onTranslationChange = new EventEmitter();
    
    isMickoUser: boolean;
    bRouteChanged: boolean;

    /*--------- Constructor --------*/
    constructor(
        private _translateService: TranslateService,
        private _appService: AppService,
        private _dtService: DTService,
        private _router: Router,
        private _cookieService: CookieService,
        private _navchangeService: NavChangeService,
        private _loginService: LoginService) {
        this._navchangeService.navchange.subscribe((status) => {this.isMickoUser= status; console.log('Status is:' + status)});
        }

    /*--------- App logic --------*/
    matchDefaultLanguage(lang: string): boolean {
        return lang == this._appService.defaultLanguage;
    }

    changeLanguage(lang: string): void {
        this._appService.changeLang(lang);
    }

    checkRoute(urlRoute: string): boolean{
        if(this._loginService.arrOfRoutesPerUser != null){
            for(let routeUser of this._loginService.arrOfRoutesPerUser){
                if(urlRoute == routeUser){
                    return true;
                }
            }
        }
        return false;
    }

    /*--------- NG On Init ---------*/f
    ngOnInit() {
        let username = 'micko';
        if(this._cookieService.get('username') == username){}

        this.isMickoUser = false;

        this._translateService.use(this._appService.getStoredLanguage());

        this._appService.navLanguageChanged.subscribe(lang => {
            this._appService.changeLangTranslate(this._translateService, lang);
        });

        this._dtService.setInitCompanyCSS();
    }
}