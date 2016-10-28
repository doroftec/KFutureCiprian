"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var products_service_1 = require('../products/products.service');
var testPageServices_1 = require('../test_page/testPageServices');
var ProductsCmp = (function () {
    function ProductsCmp(_productsService, _changeDetectionRef, _dumyProductsService) {
        this._productsService = _productsService;
        this._changeDetectionRef = _changeDetectionRef;
        this._dumyProductsService = _dumyProductsService;
        this.productName = '';
        this.productsPerPage = [];
        this.itemsPerPage = 3;
        this.totalItems = 0;
        this.currentPage = 1;
        this.maxSizeBtnPages = 5;
    }
    // ---------------------- ON INIT
    ProductsCmp.prototype.ngOnInit = function () {
        var _this = this;
        this._dumyProductsService.getProducts().subscribe(function (products) {
            _this.products = products;
            _this.setInitPageNew(1);
            _this.totalItems = products.length;
        });
        this.selectNrProductsPerPage += this.itemsPerPage;
        this.selectNrsProductsPerPage = [];
        this.selectNrsProductsPerPage.push({ label: '3', value: 3 });
        this.selectNrsProductsPerPage.push({ label: '5', value: 5 });
        this.selectNrsProductsPerPage.push({ label: '8', value: 8 });
        this.selectNrsProductsPerPage.push({ label: '10', value: 10 });
    };
    ProductsCmp.prototype.setInitPageNew = function (nrPage) {
        this.getPorductsPerNumberPage(1);
    };
    ProductsCmp.prototype.getPorductsPerNumberPage = function (nrPage) {
        var endIndex = (nrPage * this.itemsPerPage) - 1;
        var startIndex = endIndex - (this.itemsPerPage - 1);
        this.getLimitProducts(startIndex, endIndex, nrPage);
    };
    ProductsCmp.prototype.getLimitProducts = function (startIndex, endIndex, lastPage) {
        if (this.productsPerPage.length != 0) {
            this.productsPerPage = [];
        }
        //pagesTotal repesent total of pages and also the last page number from products table
        var pagesTotal = Math.ceil(this.totalItems / this.itemsPerPage);
        if (lastPage == pagesTotal) {
            var nrOfProdsLastPage = this.totalItems % this.itemsPerPage;
            var startIndexLastPage = (pagesTotal - 1) * this.itemsPerPage;
            if (nrOfProdsLastPage == 0) {
                nrOfProdsLastPage = +this.selectNrProductsPerPage;
            }
            for (var i = 0; i < nrOfProdsLastPage; i++, startIndexLastPage++) {
                this.productsPerPage[i] = this.products[startIndexLastPage];
            }
        }
        else {
            for (var i = 0; startIndex <= endIndex; i++, startIndex++) {
                this.productsPerPage[i] = this.products[startIndex];
            }
        }
    };
    ProductsCmp.prototype.pageChanged = function (event) {
        this.currentPage = event.page;
        this.getPorductsPerNumberPage(event.page);
    };
    ;
    ProductsCmp.prototype.selectedNrProdsToShow = function (event) {
        this.itemsPerPage = event.value;
        this.getPorductsPerNumberPage(this.currentPage);
    };
    ProductsCmp.prototype.searchProducts = function () {
        var productsSearched = [];
        if (this.productName) {
            for (var _i = 0, _a = this.productsPerPage; _i < _a.length; _i++) {
                var product = _a[_i];
                if (product.productName.toLowerCase().includes(this.productName.toLowerCase())) {
                    productsSearched.push(product);
                }
            }
            this.productsPerPage = productsSearched;
        }
        else {
            this.getPorductsPerNumberPage(this.currentPage);
        }
    };
    ProductsCmp = __decorate([
        core_1.Component({
            templateUrl: 'app/products/products.cmp.html',
        }), 
        __metadata('design:paramtypes', [products_service_1.ProductsService, core_1.ChangeDetectorRef, testPageServices_1.TestPageService])
    ], ProductsCmp);
    return ProductsCmp;
}());
exports.ProductsCmp = ProductsCmp;
//# sourceMappingURL=products.cmp.js.map