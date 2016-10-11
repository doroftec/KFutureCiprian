import { RouterModule } from '@angular/router';

import { ModuleWithProviders } from '@angular/core';

import { ClientsTestPageCmp } from '../clients_test_page/clientsTestPage.cmp';

export const ROUTING: ModuleWithProviders = RouterModule.forChild([
    {
        path: '',
        component: ClientsTestPageCmp
    }
]);