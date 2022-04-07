const express = require("express");
const router = express.Router();
const apiController = require("../controllers/apiController");
const path = require("path");
module.exports = function () {
  router.get("/data/:hotel/:day/:category/:hour", apiController.showData);
  router.get("/hotels", apiController.showHotels)
  return router;
};

