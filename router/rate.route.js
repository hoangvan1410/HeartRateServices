const express = require("express");
const router = express.Router();
const controller = require("../controllers/rate.controller.js");
const verifyUser = require("../Config/middleware/verifyUser");

router.post("/", verifyUser, controller.index);

router.post("/arr", verifyUser, controller.postArr);

router.post("/get", verifyUser, controller.getRates);

router.post("/delete", verifyUser, controller.deleteArr);

router.post("/update/label", verifyUser, controller.updateLabel);

module.exports = router;
