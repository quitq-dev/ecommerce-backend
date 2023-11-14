"use strict";

const accessService = require("../services/access.service");

class AccessController {
  signUp = async (req, res, next) => {
    const data = await accessService.signUp(req.body);
    return res.json(data);
  };
}

module.exports = new AccessController();
