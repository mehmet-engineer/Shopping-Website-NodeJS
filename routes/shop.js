const express = require("express");
const router = express.Router();

const shopController = require("../controllers/shopController.js");
const errorController = require("../controllers/errorController.js");

// Routing

// home
router.get("/", shopController.getIndex);

// products
router.get("/products", shopController.getProducts);
router.get("/products/:productId", shopController.getProductDetails);
router.get("/categories/:categoryId", shopController.getProductsByCategory);

// other shop routes
router.get("/checkout", shopController.getCheckout);
router.get("/cart", shopController.getCart);
router.get("/orders", shopController.getOrders);

// 404 status
router.use(errorController.get_404);

module.exports.routes = router;