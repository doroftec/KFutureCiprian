import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpModule, Http, XHRBackend, RequestOptions } from '@angular/http';

import { CalendarModule, DataScrollerModule, GrowlModule, MessagesModule, SelectButtonModule } from 'primeng/primeng';
import { DTService } from '../dtShared/dt.service';
import { ReportManagementCmp } from '../report_management/reportManagement.cmp';
import { ReportManagementService } from '../report_management/reportManagement.service';

import { ValidationService } from '../shared/services/validation.service';
import { ControlMessages } from '../shared/controlMessages.cmp';

import { CapitalPipe } from '../shared/pipes/capital.pipe';

import { CookieService } from 'angular2-cookie/core';
import { DTHttpInterceptor } from '../dtShared/dt.httpInterceptor';

import { ROUTING } from '../test_page/testPage.routes';
import { DragulaModule, DragulaService } from 'ng2-dragula/ng2-dragula';
import {DataGridModule} from 'primeng/primeng';

import { UtilityModule } from '../shared/modules/utility.module';
import { TestPageService } from './testPageServices';
import { TestPageCmp } from './testPage.cmp';

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
        DragulaModule,
        DataGridModule,
    ],
    declarations: [
        TestPageCmp
    ],
    providers: [
        TestPageService,
        DragulaService
    ],
})
export class TestPageModule {}