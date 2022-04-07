const express = require("express");
const router = express.Router();
const apiController = require("../controllers/apiController");
module.exports = function () {
  router.get("/data/:day/:category/:hour", apiController.showData);
  router.get("/hotels", apiController.showHotels)
  return router;
};

