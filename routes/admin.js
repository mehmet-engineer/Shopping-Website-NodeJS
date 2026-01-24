const express = require("express");
const router = express.Router();

const adminController = require("../controllers/adminController.js");

// prepare product list page
router.get("/admin/products", adminController.getProducts);

// prepare add product page
router.get("/admin/add-product", adminController.getAddProduct);

// handle add product form submission
router.post("/admin/add-product", adminController.postAddProduct);

// prapere edit product page
router.get("/admin/edit-product/:productId", adminController.getEditProduct);

// handle edit product form submission
router.post("/admin/edit-product", adminController.postEditProduct);

// handle delete product form submission
router.post("/admin/delete-product", adminController.postDeleteProduct);

module.exports.routes = router;