const express = require("express");
const router = express.Router();

const db_script = require("./data.js");

router.get("/admin/add-product", (req, res, next) => {
    console.log("Add product page.");
    res.render("add-product", {
        title: "Add Product Page"
    });
});

router.post("/admin/add-product", (req, res, next) => {
    console.log("Form submitted.");
    let body = req.body;
    console.log("req.body:", body);

    // saving product data in database
    db_script.product_data.add_product(
        body.name,
        body.price,
        body.image,
        body.description
    );
    
    // routing to home page
    res.redirect("/");
});

module.exports.routes = router;