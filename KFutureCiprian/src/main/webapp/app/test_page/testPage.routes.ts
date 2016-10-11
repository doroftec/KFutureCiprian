import { RouterModule } from '@angular/router';

import { ModuleWithProviders } from '@angular/core';

import { TestPageCmp } from '../test_page/testPage.cmp';

export const ROUTING: ModuleWithProviders = RouterModule.forChild([
    {
        path: '',
        component: TestPageCmp
    }
]);