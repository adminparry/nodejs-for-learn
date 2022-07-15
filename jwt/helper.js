const jwt = require("jsonwebtoken");

const tokenPrivateKey = process.env.JWT_TOKEN_PRIVATE_KEY;
const refreshTokenPrivateKey = process.env.JWT_REFRESH_TOKEN_PRIVATE_KEY;

const options = { expiresIn: "30 minutes" };
const refreshOptions = { expiresIn: "30 days" };

module.exports.generateJWT = (payload) => {
  return jwt.sign(payload, tokenPrivateKey, options);
};

module.exports.generateRefreshJwt = (payload) => {
  return jwt.sign(payload, refreshTokenPrivateKey, refreshOptions);
};

module.exports.verifyJwt = (token) => {
  return jwt.verify(token, tokenPrivateKey);
};
module.exports.verifyRefreshJwt = (token) => {
  return jwt.verify(token, refreshTokenPrivateKey);
};

module.exports.getTokenFromHeaders = () => {
  const token = headers["authorization"];
  return token ? token.slice(7, token.length) : null;
};
