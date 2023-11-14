const JWT = require("jsonwebtoken");

const createTokenPair = async (payload, publicKey, privateKey) => {
  try {
    const accessToken = await JWT.sign(payload, privateKey.toString(), {
      algorithm: "RS256",
      expiresIn: "2 days",
    });
    const refreshToken = await JWT.sign(payload, privateKey, {
      algorithm: "RS256",
      expiresIn: "5 days",
    });

    JWT.verify(accessToken, publicKey, (error, decode) => {
      if (error) {
        console.log("verify error::", error);
      } else {
        console.log("verify decode::", decode);
      }
    });
    return { accessToken, refreshToken };
  } catch (error) {
    console.log("error::", error);
    throw error;
  }
};

module.exports = {
  createTokenPair,
};
