import { Component, OnInit, ViewEncapsulation, Inject, EventEmitter,Output } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

import { CookieService } from 'angular2-cookie/core';
// import {TRANSLATE_PROVIDERS, TranslatePipe, TranslateLoader, TranslateStaticLoader, TranslateService} from 'ng2-translate/ng2-translate';

import { UserLogin } from '../login/userLogin.model'
import { LoginService } from '../login/login.service';

import { DTService } from '../dtShared/dt.service';
import { DTViewCmpIf } from '../dtShared/dt.viewcmpIF';

import { AppService } from '../shared/services/app.service';
import { NavChangeService } from '../common/navchange.service';
import { ROUTING} from '../app.routes';

declare var $: JQueryStatic;

@Component({
    moduleId: module.id,
    templateUrl: 'login.cmp.html',
    // styleUrls: ['app/login/login.cmp.css'],

    encapsulation: ViewEncapsulation.None
})
export class LoginCmp implements OnInit, DTViewCmpIf {
    submitted: boolean;
    loginModel: UserLogin = new UserLogin('micko', 'micko');

    bLoginState: boolean;
    bLoginSuccessful: boolean;
    bLoadingState: boolean;

    aCssList: any[];
    selectedCompany: string;

    isMickoOnline: boolean;
    private errorMessage: string;

    /*--------- Constructor --------*/
    constructor(
        private _loginService: LoginService,
        private _cookieService: CookieService,
        private _dtService: DTService,
        private _appService: AppService,
        private _navchangeService: NavChangeService) { }

    /*--------- App logic --------*/
    /**
     * REST - Login authentication with token returned as data
     * @author DynTech
     */
    login(): void {
        this.bLoginState = false;
        this.bLoginSuccessful = false;
        this.bLoadingState = true;

        this._dtService.setRestMessageContent('LoginCmp', 'login()');
        this._loginService.login(this.loginModel).toPromise().then(result => {
                this._cookieService.put('X-Auth-Token', result.token);
                this.getUserRest();
            });
    }

    /**
     * REST - Get user information based on token retrived previously
     * @author DynTech
     */
    getUserRest(): any {
        this._dtService.setRestMessageContent('LoginCmp', 'getUserRest()');
        this._loginService.getUser().toPromise().then(result => {

            for(let userRoute of result.userRoutes ){
                this._loginService.arrOfRoutesPerUser.push(userRoute.url);
            }

            if(result.username == 'micko'){
                this._navchangeService.navchange.emit(true);
            }

            //set username as cookie
            this._cookieService.put('username', result.username)

            let tempIterator = 0;
            for (let company in result.companies) {
                let tempOption = {
                    companyName: company,
                    cssFile: result.cssStyles[tempIterator]
                }
                this.aCssList.push(tempOption);
                tempIterator++;
            }

            if (this.aCssList.length == 1) {
                this.selectCompany(this.aCssList[0].cssFile);
            }

            
            this._appService.setStoredLanguage(result.defaultLanguage);

            this.bLoginState = true;
            this.bLoginSuccessful = true;
            this.bLoadingState = false;
        }, error => {
            this.bLoginState = true;
            this.bLoginSuccessful = false;
            this.bLoadingState = false;
        });
    }

    /**
     * Select company panel style
     * @author DynTech
     */
    selectCompany(selectedCompany: string, multicompany?: boolean): void {
        if (selectedCompany.indexOf('/')) {
            selectedCompany = selectedCompany.split('/')[1];
        }

        this._dtService.setCompnayCSS(selectedCompany);

        if (multicompany) {
            this.bLoginState = false;
            this.bLoginSuccessful = false;
        }
        this.bLoadingState = false;

        this.aCssList = [];
        this.selectedCompany = '';
    }


    /*--------- NgOnInit --------*/
    ngOnInit(): void {
        // Variable initialization
        this.bLoginState = false;
        this.bLoginSuccessful = false;
        this.bLoadingState = false;
        this.isMickoOnline = false;

        this.aCssList = [];
        this.selectedCompany = '';

        // Construct methods
        this.__setInitPageTitle('Login');
    }

    /*--------- Interface imported --------*/
    __setInitPageTitle(title: string) {
        this._dtService.setPageTitle(title);
    }
}