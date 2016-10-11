import { RouterModule } from '@angular/router';

import { ModuleWithProviders } from '@angular/core';

import { FileUploadTestCmp } from '../file_upload_test/fileUploadTest.cmp';

export const ROUTING: ModuleWithProviders = RouterModule.forChild([
    {
        path: '',
        component: FileUploadTestCmp
    }
]);