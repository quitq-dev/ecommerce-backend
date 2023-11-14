const express = require("express");
const accessController = require("../../controllers/access.controller");

const router = express.Router();

router.post("/shop/singUp", accessController.signUp);

module.exports = router;
