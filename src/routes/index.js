const express = require("express");
const signupRouter = require("./access");
const { apiKey, permission } = require("../auth/checkAuth");

const router = express.Router();

//check apiKey
router.use(apiKey);

//check permission
router.use(permission("0000"));

router.use("/v1/api", signupRouter);

router.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

router.use((error, req, res, next) => {
  const statusCode = error.status || 500;
  return res.status(statusCode).json({
    status: "error",
    code: statusCode,
    message: error.message || "Internal Server Error",
  });
});

module.exports = router;
