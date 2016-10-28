import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

import { ProductsService } from '../products/products.service';
import { TestPageService } from '../test_page/testPageServices';
import { Product } from '../test_page/products.model';

import { PaginationModule } from 'ng2-bootstrap/ng2-bootstrap';

import {SelectItem} from 'primeng/primeng';
import {DropdownModule} from 'primeng/primeng';
import {InputTextModule} from 'primeng/primeng';
import { SearchProductsFilterPipe } from '../shared/pipes/searchProducts.pipe';


@Component({
    templateUrl: 'app/products/products.cmp.html',
})
export class ProductsCmp implements OnInit {
    constructor(private _productsService: ProductsService,
                private _changeDetectionRef: ChangeDetectorRef, 
                private _dumyProductsService: TestPageService) { }

    productName: string = '';
    
    products: Product[];
    productsPerPage: Product[] = [];

    public itemsPerPage: number = 3;
    public totalItems:number = 0;
    public currentPage: number = 1;
 
    maxSizeBtnPages: number = 5;

    selectNrsProductsPerPage: SelectItem[];
    selectNrProductsPerPage: string;

    // ---------------------- ON INIT
    ngOnInit() {
        this._dumyProductsService.getProducts().subscribe(products => {
            this.products = products;
            this.setInitPageNew(1);
            this.totalItems = products.length;
        });

        this.selectNrProductsPerPage += this.itemsPerPage;

        this.selectNrsProductsPerPage = [];
        this.selectNrsProductsPerPage.push({label:'3', value:3});
        this.selectNrsProductsPerPage.push({label:'5', value:5});
        this.selectNrsProductsPerPage.push({label:'8', value:8});
        this.selectNrsProductsPerPage.push({label:'10', value:10});
    }

    private setInitPageNew(nrPage: number){
        this.getPorductsPerNumberPage(1);
    }

    private getPorductsPerNumberPage(nrPage: number){
        var endIndex = (nrPage * this.itemsPerPage)-1;
        var startIndex = endIndex - (this.itemsPerPage - 1);

        this.getLimitProducts(startIndex, endIndex, nrPage);
    }

    private getLimitProducts(startIndex: number, endIndex: number, lastPage: number){
        if(this.productsPerPage.length != 0){
            this.productsPerPage = [];
        }
        //pagesTotal repesent total of pages and also the last page number from products table
        var pagesTotal = Math.ceil(this.totalItems/this.itemsPerPage)
        if(lastPage == pagesTotal){
            var nrOfProdsLastPage = this.totalItems % this.itemsPerPage;
            var startIndexLastPage = (pagesTotal - 1) * this.itemsPerPage;

            if(nrOfProdsLastPage == 0){
                nrOfProdsLastPage =+ this.selectNrProductsPerPage;
            }
            for(var i=0; i < nrOfProdsLastPage; i++,startIndexLastPage++){
                this.productsPerPage[i] = this.products[startIndexLastPage];
            }
        }else{
            for(var i = 0;startIndex <= endIndex; i++, startIndex++){
                this.productsPerPage[i] = this.products[startIndex];
            }
        }
    }

    public pageChanged(event:any):void {
        this.currentPage = event.page;
        this.getPorductsPerNumberPage(event.page);
    };

    selectedNrProdsToShow(event :any){
        this.itemsPerPage = event.value;
        this.getPorductsPerNumberPage(this.currentPage);
    }

    searchProducts(){
        var productsSearched: Product[] = [];
        if(this.productName){
            for(let product of this.productsPerPage){
            if( product.productName.toLowerCase().includes(this.productName.toLowerCase()) ){
                productsSearched.push(product);
            }
        }
        this.productsPerPage = productsSearched;
        }else{
            this.getPorductsPerNumberPage(this.currentPage);
        }
    }
}
