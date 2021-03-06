import { NgModule } from '@angular/core';

import { ROUTING } from '../file_upload_test/fileUploadTest.routes';

import { UtilityModule } from '../shared/modules/utility.module';
import { FileUploadTestCmp } from './fileUploadTest.cmp';
import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload';
import { FileUploadTestService } from './fileUploadTest.services';
import { HttpModule, Http, XHRBackend, RequestOptions } from '@angular/http';
import { CookieService } from 'angular2-cookie/core';
import {DataGridModule} from 'primeng/primeng';
import { InputMaskModule, TabViewModule, InputSwitchModule, InputTextModule, DialogModule, ButtonModule, CalendarModule, DataScrollerModule, GrowlModule, MessagesModule,PanelModule} from 'primeng/primeng';
import { DTHttpInterceptor } from '../dtShared/dt.httpInterceptor';

@NgModule({
    imports: [
        ROUTING,
        UtilityModule,
        InputMaskModule, 
        TabViewModule, 
        InputSwitchModule, 
        InputTextModule, 
        DialogModule, 
        ButtonModule, 
        CalendarModule, 
        DataScrollerModule, 
        GrowlModule, 
        MessagesModule,
        PanelModule,
        DataGridModule
    ],
    declarations: [
        FileUploadTestCmp,
        FileSelectDirective, 
        FileDropDirective,
        
    ],
    providers: [FileUploadTestService,CookieService,
     {
            provide: Http,
            useFactory: (
                backend: XHRBackend,
                defaultOptions: RequestOptions,
                cookieService: CookieService) =>
                new DTHttpInterceptor(backend, defaultOptions, cookieService),
            deps: [XHRBackend, RequestOptions, CookieService]
        }],
})
export class FileUploadTestModule {}