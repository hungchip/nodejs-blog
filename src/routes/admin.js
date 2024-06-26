var express = require("express");
const AdminController = require("../controllers/AdminController");
var adminRouter = express.Router();

adminRouter.get("/", (req, res, next) => AdminController.index(req, res, next));

module.exports = adminRouter;
