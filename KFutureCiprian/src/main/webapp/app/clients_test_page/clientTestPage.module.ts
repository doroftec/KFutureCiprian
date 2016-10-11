import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpModule, Http, XHRBackend, RequestOptions } from '@angular/http';

import { InputSwitchModule, InputTextModule, DialogModule, ButtonModule, CalendarModule, DataScrollerModule, GrowlModule, MessagesModule } from 'primeng/primeng';
import { DTService } from '../dtShared/dt.service';
import { ReportManagementCmp } from '../report_management/reportManagement.cmp';
import { ReportManagementService } from '../report_management/reportManagement.service';

import { ValidationService } from '../shared/services/validation.service';
import { ControlMessages } from '../shared/controlMessages.cmp';

import { CapitalPipe } from '../shared/pipes/capital.pipe';

import { CookieService } from 'angular2-cookie/core';
import { DTHttpInterceptor } from '../dtShared/dt.httpInterceptor';

import { DragulaModule, DragulaService } from 'ng2-dragula/ng2-dragula';
import {DataGridModule} from 'primeng/primeng';
import { ROUTING } from './clientTestPage.routes';

import { UtilityModule } from '../shared/modules/utility.module';
import { ClientsTestPageServices } from './clientsTestPageServices';
import { ClientsTestPageCmp } from './clientsTestPage.cmp';
import { DropdownModule } from 'primeng/primeng';
import {InputMaskModule, PanelModule, TabViewModule} from 'primeng/primeng';

@NgModule({
    imports: [
        ReactiveFormsModule,
        CalendarModule,
        DataScrollerModule,
        GrowlModule,
        MessagesModule,
        UtilityModule,
        DragulaModule,
        DataGridModule,
        ROUTING,
        DropdownModule,
        PanelModule,
        ButtonModule,
        DialogModule,
        InputTextModule,
        InputSwitchModule,
        TabViewModule,
        InputMaskModule
    ],
    declarations: [
        ClientsTestPageCmp
    ],
    providers: [
        ClientsTestPageServices,
        DragulaService
    ],
})
export class ClientTestPageModule {}