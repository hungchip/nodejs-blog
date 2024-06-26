var express = require("express");
const AdminController = require("../controllers/AdminController");
const ProductController = require("../controllers/ProductController");
const router = express.Router();

router.get("/", AdminController.index);
router.get("/login", AdminController.getLogin);
router.get("/product", ProductController.index);

module.exports = router;
