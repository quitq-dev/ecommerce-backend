const keyTokenModel = require("../models/key-token.model");

class KeyTokenService {
  static createKeyToken = ({ userId, publicKey }) => {
    const publicKeyString = publicKey.toString();
    const tokens = keyTokenModel.create({
      user: userId,
      publicKey: publicKeyString,
    });
    return tokens ? publicKeyString : null;
  };
}

module.exports = KeyTokenService;
