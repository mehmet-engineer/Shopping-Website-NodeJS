const data_script = require("../models/data.js");

function getIndex(req, res, next) {
    console.log("Home page.");

    res.render("shop/index.pug", {
        title: "Home Page",
        products: data_script.productDatabase.get_products(),
        categories: data_script.categories,
        path: "/"
    });
};

function getProducts(req, res, next) {
    console.log("Getting products...");

    res.render("shop/products.pug", {
        title: "Products Page",
        subtitle: "All Products",
        products: data_script.productDatabase.get_products(),
        categories: data_script.categories,
        path: "/products"
    });
};

function getProductsByCategory(req, res, next) {
    console.log("Getting products by category...");

    const categoryId = Number(req.params.categoryId);
    const filteredProducts = data_script.productDatabase.get_products_by_category(categoryId);

    res.render("shop/products.pug", {
        title: "Products Page",
        subtitle: data_script.get_category_name_by_id(categoryId),
        products: filteredProducts,
        categories: data_script.categories,
        selectedCategory: categoryId,
        path: "/products"
    });
};

function getProductDetails(req, res, next) {
    console.log("Getting product details...");

    const productId = req.params.productId;
    const product = data_script.productDatabase.get_product_by_id(productId);

    res.render("shop/details.pug", {
        title: product.name,
        product: product,
        path: "/products"
    });
};

function getCart(req, res, next) {
    console.log("Getting cart...");

    res.render("shop/cart.pug", {
        title: "Cart Page",
        path: "/cart"
    });
};

function getOrders(req, res, next) {
    console.log("Getting orders...");

    res.render("shop/orders.pug", {
        title: "Orders Page",
        path: "/orders"
    });
};

function getCheckout(req, res, next) {
    console.log("Getting checkout...");

    res.render("shop/checkout.pug", {
        title: "Checkout Page",
        path: "/checkout"
    });
};

module.exports.getIndex = getIndex;
module.exports.getProducts = getProducts;
module.exports.getProductsByCategory = getProductsByCategory;
module.exports.getProductDetails = getProductDetails;
module.exports.getCart = getCart;
module.exports.getOrders = getOrders;
module.exports.getCheckout = getCheckout;
