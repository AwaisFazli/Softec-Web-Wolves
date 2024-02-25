const jwt = require("jsonwebtoken");
require("dotenv").config();
const jwtsecret = process.env.JWT_SECRET;

const auth = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    console.log("No Token Found");
    return res.status(401).json({ error: "Unauthorized. Missing token." });
  }
  try {
    const decodedToken = jwt.verify(token, jwtsecret);
    req.userId = decodedToken.userId;
    next();
  } catch (error) {
    console.error(error);
    return res.status(403).json({ error: "Forbidden. Invalid token." });
  }
};

module.exports = auth;