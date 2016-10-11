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
var testPageServices_1 = require('./testPageServices');
var products_model_1 = require('./products.model');
var TestPageCmp = (function () {
    function TestPageCmp(_testPageServices) {
        this._testPageServices = _testPageServices;
        this.many = ['The', 'possibilities', 'are', 'endless!'];
        this.many2 = ['Explore', 'them'];
    }
    // On init
    TestPageCmp.prototype.ngOnInit = function () {
        this.hiddenFlag = true;
        this.getProducts();
        this.message = "Test";
        this.product = new products_model_1.Product(null, null, null, null);
    };
    TestPageCmp.prototype.getProducts = function () {
        var _this = this;
        this._testPageServices.getProducts().subscribe(function (products) { return _this.products = products; }, function (error) { return _this.errorMessage = error; });
    };
    TestPageCmp.prototype.onSubmit = function (product) {
        var newProduct = new products_model_1.Product(product.productId, product.productName, product.price, product.releaseDate);
        var productsArrLength = this.products.length;
        this.products[productsArrLength] = newProduct;
    };
    TestPageCmp.prototype.resetForm = function () {
        this.product.price = null;
        this.product.productId = null;
        this.product.productName = null;
        this.product.releaseDate = null;
    };
    TestPageCmp.prototype.viewProductDetail = function (product) {
        this.hiddenFlag = false;
        this.productWithDetails = product;
    };
    TestPageCmp = __decorate([
        core_1.Component({
            templateUrl: 'app/test_page/testPage.cmp.html',
            styleUrls: ['app/test_page/testPage.cmp.css']
        }), 
        __metadata('design:paramtypes', [testPageServices_1.TestPageService])
    ], TestPageCmp);
    return TestPageCmp;
}());
exports.TestPageCmp = TestPageCmp;
//# sourceMappingURL=testPage.cmp.js.map