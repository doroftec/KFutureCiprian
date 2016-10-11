import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';

import { DragulaModule, DragulaService } from 'ng2-dragula/ng2-dragula';
import { TestPageService } from './testPageServices';
import { Product } from './products.model';
import {DataGridModule} from 'primeng/primeng';
import {Header} from 'primeng/primeng';

@Component({
    templateUrl: 'app/test_page/testPage.cmp.html',
    styleUrls: ['app/test_page/testPage.cmp.css']
})
export class TestPageCmp implements OnInit {
    errorMessage: string;
    products: Product[];
    product: Product;
    newProduct: Product;
    productWithDetails: Product;
    message: string;
    hiddenFlag: boolean;

    many: Array<string> = ['The', 'possibilities', 'are', 'endless!'];
    many2: Array<string> = ['Explore', 'them'];

    constructor(private _testPageServices: TestPageService) {}

    // On init
    public ngOnInit():void {
        this.hiddenFlag = true;
        this.getProducts();
        this.message = "Test";
        this.product = new Product(null,null,null,null);
    }

    getProducts(){
        this._testPageServices.getProducts().subscribe(
            products => this.products = products,
            error => this.errorMessage = <any>error);
    }

    onSubmit(product: Product){
        let newProduct = new Product(product.productId,product.productName,product.price,product.releaseDate);
        let productsArrLength = this.products.length;
        this.products[productsArrLength] = newProduct;
    }

    resetForm(){
        this.product.price = null;
        this.product.productId = null;
        this.product.productName = null
        this.product.releaseDate = null
    }

    viewProductDetail(product: Product){
        this.hiddenFlag = false;
        this.productWithDetails = product;
    }
}