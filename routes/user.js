const express = require("express");
const router = express.Router();

const db_script = require("./data.js");

router.get("/", (req, res, next) => {
    console.log("Home page. Getting products...");

    res.render("index", {
        title: "Home Page",
        products: db_script.product_data.get_products()
    });
});

module.exports.routes = router;