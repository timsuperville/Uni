const jwt = require("jsonwebtoken");
const config = require("../../../../config");

const generateAccessToken = async (payload) => {
  return jwt.sign(payload, config.jwtSecret, { expiresIn: "1800s" });
};
const generateRefreshToken = async (payload) => {
  return jwt.sign(payload, config.jwtRefreshSecret);
};
const generateToken = async (payload) => {
  return jwt.sign(payload, config.jwtSecret);
};
const verifyToken = async (token, user) => {
  const payload = jwt.verify(token, config.jwtSecret);
  if (payload.email !== user.email) {
    return false;
  }
  return true;
};
const generatePasswordResetToken = async (payload) => {
  const token = jwt.sign(payload, config.jwtSecret, { expiresIn: "1h" });
  return token;
};
const verifyPasswordResetToken = async (token) => {
  const payload = jwt.verify(token, config.jwtSecret);
  return payload;
};
const authenticateToken = async (req, res, next) => {
  const authHeader = req.headers["Authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);
  jwt.verify(token, config.jwtSecret, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

module.exports = {
  generateAccessToken,
  generateRefreshToken,
  generateToken,
  verifyToken,
  generatePasswordResetToken,
  verifyPasswordResetToken,
  authenticateToken,
};
