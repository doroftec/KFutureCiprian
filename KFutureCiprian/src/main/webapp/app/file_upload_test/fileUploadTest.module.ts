import { NgModule } from '@angular/core';

import { ROUTING } from '../file_upload_test/fileUploadTest.routes';

import { UtilityModule } from '../shared/modules/utility.module';
import { FileUploadTestCmp } from './fileUploadTest.cmp';
import { FileSelectDirective, FileDropDirective } from '../ng2-file-upload';
import { FileUploadTestService } from './fileUploadTest.services';
import { CookieService } from 'angular2-cookie/core';
import {DataGridModule} from 'primeng/primeng';
import { InputMaskModule, TabViewModule, InputSwitchModule, InputTextModule, DialogModule, ButtonModule, CalendarModule, DataScrollerModule, GrowlModule, MessagesModule,PanelModule} from 'primeng/primeng';

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
        FileDropDirective
    ],
    providers: [FileUploadTestService,CookieService],
})
export class FileUploadTestModule {}