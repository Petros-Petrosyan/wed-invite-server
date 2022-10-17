const jwt = require("jsonwebtoken");
const { messages } = require("../constants/messages");

const verify = (req, res, next) => {
  const {
    headers: { authorization },
  } = req;

  if (authorization) {
    const token = authorization.split(" ")[1];
    jwt.verify(token, "mySecretKeyForAccessToken", (err, user) => {
      if (err) {
        return res.status(403).json(messages.invalid_token);
      }

      req.user = user;
      next();
    });
  } else {
    res.status(401).json(messages.not_authenticated);
  }
};

module.exports = verify;
