import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpModule, Http, XHRBackend, RequestOptions } from '@angular/http';

import { CalendarModule, DataScrollerModule, GrowlModule, MessagesModule, SelectButtonModule } from 'primeng/primeng';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate/ng2-translate';

import { DTService } from '../dtShared/dt.service';
import { ReportManagementCmp } from '../report_management/reportManagement.cmp';
import { ReportManagementService } from '../report_management/reportManagement.service';

import { ValidationService } from '../shared/services/validation.service';
import { ControlMessageModule } from '../shared/modules/controlMessages.module';

import { CapitalPipe } from '../shared/pipes/capital.pipe';

import { CookieService } from 'angular2-cookie/core';
import { DTHttpInterceptor } from '../dtShared/dt.httpInterceptor';

import { ROUTING } from '../report_management/reportManagement.routes';

import { UtilityModule } from '../shared/modules/utility.module';
import { AppService } from '../shared/services/app.service';

@NgModule({
    imports: [
        ReactiveFormsModule,
        CalendarModule,
        DataScrollerModule,
        GrowlModule,
        MessagesModule,
        SelectButtonModule,
        ROUTING,
        UtilityModule,
        ControlMessageModule,
        TranslateModule.forRoot({
            provide: TranslateLoader,
            useFactory: (http: Http) => new TranslateStaticLoader(http, 'rest/translations/reportManagement', ''),
            deps: [Http]
        })
    ],
    declarations: [
        ReportManagementCmp,
        CapitalPipe
    ],
    providers: [
        ReportManagementService,
        ValidationService,
        Validators,
        {
            provide: Http,
            useFactory: (
                backend: XHRBackend,
                defaultOptions: RequestOptions,
                cookieService: CookieService) =>
                new DTHttpInterceptor(backend, defaultOptions, cookieService),
            deps: [XHRBackend, RequestOptions, CookieService]
        },
    ],
})

export class ReportManagementModule { }
