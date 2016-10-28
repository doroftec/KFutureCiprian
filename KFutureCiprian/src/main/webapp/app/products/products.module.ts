import { NgModule } from '@angular/core';


import { DataTableModule } from 'primeng/primeng';
import { PaginationModule } from 'ng2-bootstrap/components/pagination';

import { ProductsCmp }   from './products.cmp';

import { TestPageService } from '../test_page/testPageServices';
import { ProductsService } from '../products/products.service';
import { Product } from '../products/product.model';

import { DTService } from '../dtShared/dt.service';
import { DTTable } from '../dtShared/table/dt.table';

import { ROUTING } from './products.routes';

import { UtilityModule } from '../shared/modules/utility.module';
import { DropdownModule, InputTextModule } from 'primeng/primeng';

@NgModule({
    imports: [
        DataTableModule,
        PaginationModule,
        UtilityModule,
        ROUTING,
        DropdownModule
    ],
    declarations: [ProductsCmp],
    providers: [
        ProductsService,
        DTService,
        DTTable,
        TestPageService
    ],
})
export class ProductsModule { }