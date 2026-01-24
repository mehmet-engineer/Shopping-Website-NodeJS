const data_script = require("../models/data.js");

function generate_id() {
    let digit = 5;
    let id = String(Math.floor(Math.random() * Math.pow(10, digit)) + 1);
    return id;
}

function getProducts(req, res, next) {
    console.log("Getting products...");

    res.render("admin/list-products.pug", {
        title: "Admin Products Page",
        products: data_script.productDatabase.get_products(),
        categories: data_script.categories,
        path: "/admin/products",
        action: req.query.action
    });
};

function getAddProduct(req, res, next) {
    console.log("Add Product Admin Page.");

    res.render("admin/add-product.pug", {
        title: "Add Product Page",
        categories: data_script.categories,
        path: "/admin/add-product"
    });
};

function postAddProduct(req, res, next) {
    console.log("Add Product Form Submitted.");
    let body = req.body;
    console.log("req.body:", body);

    // creating new product object
    let new_product = new data_script.product(
        generate_id(),
        Number(body.categoryId),
        body.name,
        body.price,
        body.image,
        body.description
    );

    // saving product data in database
    data_script.productDatabase.add_product(new_product);
    
    // routing to admin products page
    res.redirect("/admin/products?action=add");
};

function getEditProduct(req, res, next) {
    console.log("Edit Product Admin Page.");

    const productId = req.params.productId;
    const product = data_script.productDatabase.get_product_by_id(productId);

    res.render("admin/edit-product.pug", {
        title: "Edit Product Page",
        product: product,
        categories: data_script.categories,
        path: "/admin/products"
    });
};

function postEditProduct(req, res, next) {
    console.log("Edit Product Form submitted.");
    let body = req.body;
    console.log("req.body:", body);

    // creating new updated product object
    let updated_product = new data_script.product(
        body.id,
        Number(body.categoryId),
        body.name,
        body.price,
        body.image,
        body.description
    );

    // updating product data in database
    data_script.productDatabase.edit_product(body.id, updated_product);

    // routing to admin products page
    res.redirect("/admin/products?action=edit");
};

function postDeleteProduct(req, res, next) {
    console.log("Delete Product Form submitted.");
    let body = req.body;
    console.log("req.body:", body);

    // deleting product data in database
    data_script.productDatabase.delete_product(body.id);

    // routing to admin products page
    res.redirect("/admin/products?action=delete");
}

module.exports.getProducts = getProducts;
module.exports.getAddProduct = getAddProduct;
module.exports.postAddProduct = postAddProduct;
module.exports.getEditProduct = getEditProduct;
module.exports.postEditProduct = postEditProduct;
module.exports.postDeleteProduct = postDeleteProduct;
