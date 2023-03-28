const jwt = require("jsonwebtoken");
const { messages } = require("../constants/messages");
const { Users } = require("../models");

const verify = async (req, res, next) => {
  const {
    headers: { authorization },
  } = req;

  if (authorization) {
    const headerData = JSON.parse(authorization.split(" ")[1]);
    let token = null;
    let email = null;

    if (headerData?.email) {
      email = headerData.email;
    } else {
      token = headerData.token;
    }

    if (email) {
      try {
        const user = await Users.findOne({
          where: { email: String(email) },
        });

        if (!user) {
          return res.status(401).json(messages.not_authenticated);
        }

        req.user = user;
        next();
      } catch (error) {
        return res.status(401).json(messages.not_authenticated);
      }
    } else {
      jwt.verify(token, "mySecretKeyForAccessToken", (err, user) => {
        if (err) {
          return res.status(403).json(messages.invalid_token);
        }

        req.user = user;
        next();
      });
    }
  } else {
    return res.status(401).json(messages.not_authenticated);
  }
};

module.exports = verify;
