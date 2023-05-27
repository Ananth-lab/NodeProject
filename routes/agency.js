const express = require("express");

const userAuthentication = require("../middlewares/auth");

const routes = express.Router();

const agencyController = require("../controllers/admin-agency");

routes.use("/signup", agencyController.SignUpController);


module.exports = routes;