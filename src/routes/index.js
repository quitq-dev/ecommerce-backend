const express = require("express");
const signupRouter = require("./access");
const { apiKey, permission } = require("../auth/checkAuth");

const router = express.Router();

//check apiKey
router.use(apiKey);

//check permission
router.use(permission("0000"));

router.use("/v1/api", signupRouter);

module.exports = router;
