const express = require("express");
const signupRouter = require("./access");

const router = express.Router();

router.use("/v1/api", signupRouter);

module.exports = router;
