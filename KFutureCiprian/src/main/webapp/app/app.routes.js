"use strict";
var router_1 = require('@angular/router');
var loginGuard_1 = require('./login/loginGuard');
var routes = [
    { path: '', loadChildren: 'app/login/login.module#LoginModule' },
    { path: 'login', loadChildren: 'app/login/login.module#LoginModule' },
    { path: 'products', loadChildren: 'app/products/products.module#ProductsModule' },
    { path: 'report_management', loadChildren: 'app/report_management/reportManagement.module#ReportManagementModule' },
    { path: 'cache_test', loadChildren: 'app/cache_test/cacheTest.module#CacheTestModule' },
    { path: 'error_log', loadChildren: 'app/error_log/errorLog.module#ErrorLogModule' },
    { path: 'admin/create_report', loadChildren: 'app/admin-create_report/adminCreateReport.module#AdminCreateReportModule', canActivate: [loginGuard_1.LoginGuard] },
    { path: 'test_page', loadChildren: 'app/test_page/testPage.module#TestPageModule', canActivate: [loginGuard_1.LoginGuard] },
    { path: 'clients_test_page', loadChildren: 'app/clients_test_page/clientTestPage.module#ClientTestPageModule' },
    { path: 'file_upload', loadChildren: 'app/file_upload_test/fileUploadTest.module#FileUploadTestModule' },
    { path: '**', redirectTo: 'login' }
];
exports.ROUTING = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routes.js.map