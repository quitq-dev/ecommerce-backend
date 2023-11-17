const { HEADERS } = require("../configs");
const findById = require("../services/apiKey.service");

const apiKey = async (req, res, next) => {
  try {
    const key = req.headers[HEADERS.API_KEY];
    if (!key) {
      return res.status(403).json({
        message: "Forbidden Error",
      });
    }
    const objKey = await findById(key);
    if (!objKey) {
      return res.status(403).json({
        code: 403,
        message: "Forbidden Error",
      });
    }
    req.objKey = objKey;
    return next();
  } catch (error) {
    console.error(error);
  }
};

const permission = (permission) => {
  return (req, res, next) => {
    const { permissions } = req.objKey;
    if (permissions && permissions.includes(permission)) {
      return next();
    }
    return res.status(403).json({
      code: 403,
      message: "Permission Error",
    });
  };
};

const asyncHandler = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};

module.exports = { apiKey, permission, asyncHandler };
