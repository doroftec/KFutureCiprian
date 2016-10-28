"use strict";
var Product = (function () {
    function Product(productId, productName, price, releaseDate, description) {
        this.productId = productId;
        this.productName = productName;
        this.price = price;
        this.releaseDate = releaseDate;
        this.description = description;
    }
    return Product;
}());
exports.Product = Product;
//# sourceMappingURL=products.model.js.map