const jwt = require("jsonwebtoken");
const { messages } = require("../constants/messages");
const { Users } = require("../models");

const verifyAdmin = async (req, res, next, a, b) => {
  const {
    headers: { authorization },
  } = req;

  if (authorization) {
    const headerData = JSON.parse(authorization.split(" ")[1]);
    let token = headerData?.token;

    if (token) {
      jwt.verify(token, "mySecretKeyForAccessToken", async (err, user) => {
        if (err) {
          return res.status(403).json(messages.invalid_token);
        }

        if (user) {
          const userData = await Users.findOne({
            where: { id: String(user.id) },
          });

          if (userData?.dataValues?.userName === "petros") {
            req.user = user;
            next();
          } else {
            return res.status(403).json(messages.invalid_token);
          }
        }
      });
    } else {
      return res.status(401).json(messages.not_authenticated);
    }
  } else {
    return res.status(401).json(messages.not_authenticated);
  }
};

module.exports = verifyAdmin;
