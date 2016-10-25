import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

// Custom Components
import { AppCmp } from './app.cmp'; // Main cmp
import { NavModule } from './common/nav.module';

import { ROUTING } from './app.routes';

import { UtilityModule } from './shared/modules/utility.module';

import { AppService } from './shared/services/app.service';

import { LoginService } from "./login/login.service";

import { LoginGuard } from "./login/loginGuard";
import { AuthGuard } from './login/authGuard';

import { LoginModule } from './login/login.module';

@NgModule({
    imports: [
        BrowserModule,
        NavModule,
        ROUTING,
        UtilityModule,
        LoginModule
    ],
    declarations: [
        AppCmp
    ],
    bootstrap: [AppCmp],
    providers: [
        AppService,
        LoginService,
        LoginGuard,
        AuthGuard,
        {
            provide: LocationStrategy,
            useClass: HashLocationStrategy
        }
    ]
})

export class AppModule { }