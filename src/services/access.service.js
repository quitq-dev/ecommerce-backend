"use strict";
const { ROLE_SHOP } = require("../configs");
const shopModel = require("../models/shop.model");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const KeyTokenService = require("./keyToken.service");
const { createTokenPair } = require("../utils/auth");
const { getInfoData } = require("../utils");

class AccessService {
  static async signUp(body) {
    try {
      const { name, password, email } = body;
      const user = await shopModel.findOne({ email });
      if (user) {
        return {
          code: 409,
          message: "Email already registered!",
        };
      }
      const passwordHash = await bcrypt.hash(password, 10);
      const dataSignUp = {
        name,
        email,
        password: passwordHash,
        roles: ROLE_SHOP.SHOP,
      };
      const newShop = await shopModel.create(dataSignUp);
      const { privateKey, publicKey } = crypto.generateKeyPairSync("rsa", {
        modulusLength: 4096,
        publicKeyEncoding: {
          type: "pkcs1",
          format: "pem",
        },
        privateKeyEncoding: {
          type: "pkcs1",
          format: "pem",
        },
      });
      const publicKeyString = await KeyTokenService.createKeyToken({
        userId: newShop._id,
        publicKey: publicKey,
      });
      if (!publicKeyString) {
        return {
          code: "500",
          message: "publicKeyString error!",
        };
      }
      const tokens = await createTokenPair(
        { userId: newShop._id, email },
        publicKey,
        privateKey
      );
      return {
        code: 201,
        metadata: {
          shop: getInfoData({
            object: newShop,
            fields: ["_id", "name", "email", "status"],
          }),
          tokens,
        },
      };
    } catch (error) {
      console.error(error);
      return {
        code: 500,
        status: "error",
        message: error.message,
      };
    }
  }
}

module.exports = AccessService;
