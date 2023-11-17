"use strict";

const accessService = require("../services/access.service");
const { CREATED } = require("../core/success.response");

class AccessController {
  signUp = async (req, res, next) => {
    const data = await accessService.signUp(req.body);
    new CREATED({ message: "Registered OK!", metadata: data }).send(res);
  };
}

module.exports = new AccessController();
