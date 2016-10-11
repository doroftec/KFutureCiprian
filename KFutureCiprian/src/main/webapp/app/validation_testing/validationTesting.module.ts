import { NgModule } from '@angular/core';
import { HttpModule, Http, XHRBackend, RequestOptions } from '@angular/http';
import { ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';
import { ValidationTestingCmp }   from './validationTesting.cmp';
import { UtilityModule } from '../shared/modules/utility.module';
import { ROUTING } from './validationTesting.routes';
import { CookieService } from 'angular2-cookie/core';
import { DTHttpInterceptor } from '../dtShared/dt.httpInterceptor';
import { ControlMessageModule } from '../shared/modules/controlMessages.module';
import { ValidationTestingService } from './validationTesting.service';

@NgModule({
    imports: [
        ReactiveFormsModule,
        UtilityModule,
        ControlMessageModule,
        ROUTING
    ],
    exports: [],
    declarations: [
        ValidationTestingCmp,
    ],
    providers: [
        FormBuilder,
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
        ValidationTestingService
    ],
})
export class ValidationTestingModule { }
