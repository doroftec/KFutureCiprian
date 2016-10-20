import { Routes, RouterModule } from '@angular/router';

import { ProductsCmp } from './products/products.cmp';

import { LoginGuard } from './login/loginGuard';

const routes: Routes = [
  { path: '', loadChildren: 'app/login/login.module#LoginModule' },
  { path: 'login', loadChildren: 'app/login/login.module#LoginModule' },
  { path: 'products', loadChildren: 'app/products/products.module#ProductsModule' },
  { path: 'report_management', loadChildren: 'app/report_management/reportManagement.module#ReportManagementModule'},
  { path: 'cache_test', loadChildren: 'app/cache_test/cacheTest.module#CacheTestModule'},
  { path: 'error_log', loadChildren: 'app/error_log/errorLog.module#ErrorLogModule'},
  { path: 'admin/create_report', loadChildren: 'app/admin-create_report/adminCreateReport.module#AdminCreateReportModule', canActivate:[LoginGuard]},
  { path: 'test_page', loadChildren: 'app/test_page/testPage.module#TestPageModule', canActivate:[LoginGuard]},
  { path: 'clients_test_page', loadChildren: 'app/clients_test_page/clientTestPage.module#ClientTestPageModule' },
  { path: 'file_upload', loadChildren: 'app/file_upload_test/fileUploadTest.module#FileUploadTestModule' },
  { path: '**', redirectTo: 'login' }
];

export const ROUTING = RouterModule.forRoot(routes);