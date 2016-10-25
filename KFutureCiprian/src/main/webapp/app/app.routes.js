"use strict";
var router_1 = require('@angular/router');
var loginGuard_1 = require('./login/loginGuard');
var authGuard_1 = require('./login/authGuard');
var routes = [
    { path: '', loadChildren: 'app/login/login.module#LoginModule' },
    { path: 'login', loadChildren: 'app/login/login.module#LoginModule' },
    { path: 'products', loadChildren: 'app/products/products.module#ProductsModule', canLoad: [authGuard_1.AuthGuard] },
    { path: 'report_management', loadChildren: 'app/report_management/reportManagement.module#ReportManagementModule', canLoad: [authGuard_1.AuthGuard] },
    { path: 'cache_test', loadChildren: 'app/cache_test/cacheTest.module#CacheTestModule', canLoad: [authGuard_1.AuthGuard] },
    { path: 'error_log', loadChildren: 'app/error_log/errorLog.module#ErrorLogModule', canLoad: [authGuard_1.AuthGuard] },
    { path: 'admin/create_report', loadChildren: 'app/admin-create_report/adminCreateReport.module#AdminCreateReportModule', canLoad: [authGuard_1.AuthGuard] },
    { path: 'test_page', loadChildren: 'app/test_page/testPage.module#TestPageModule', canActivate: [loginGuard_1.LoginGuard] },
    { path: 'clients_test_page', loadChildren: 'app/clients_test_page/clientTestPage.module#ClientTestPageModule' },
    { path: 'file_upload', loadChildren: 'app/file_upload_test/fileUploadTest.module#FileUploadTestModule' },
    { path: '**', redirectTo: 'login' }
];
exports.ROUTING = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routes.js.map