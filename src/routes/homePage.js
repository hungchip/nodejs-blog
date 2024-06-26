var express = require("express");
const HomePageController = require("../controllers/client/HomePageController");

var router = express.Router();

router.get("/", HomePageController.index);

module.exports = router;
