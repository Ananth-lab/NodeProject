const express = require("express");

const userAuthentication = require("../middlewares/auth");

const routes = express.Router();

const clientController = require("../controllers/client");

const adminController = require("../controllers/admin-agency");

routes.use("/signup", adminController.SignUpController);


routes.use("/login", clientController.logInController);


routes.get("/get-details", userAuthentication.authenticate, clientController.getDetailsController);

routes.use("/update-details", userAuthentication.authenticate, clientController.updateDetailsController);

routes.get("/get-bills", userAuthentication.authenticate, clientController.getBillsController);



module.exports = routes;