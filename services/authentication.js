const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { messages } = require("../constants/messages");
const { Users } = require("../models");

exports.signUp = async ({ userName, password }) => {
  try {
    const existingUser = await Users.findOne({ where: { userName } });
    if (!!existingUser) {
      return { status: 500, data: messages.exist_user };
    }

    try {
      const hashedPassword = await bcrypt.hash(password, 12);
      await Users.create({
        userName,
        password: hashedPassword,
      });
    } catch (error) {
      console.log(error);
      return { status: 500, data: error };
    }

    return { status: 201, data: messages.success_signup };
  } catch (error) {
    console.log(error);
    return { status: 500, data: error };
  }
};

exports.logIn = async ({ userName, password }) => {
  try {
    const user = await Users.findOne({ where: { userName } });
    const validUser = await bcrypt.compare(password, user.password);

    if (!user || !validUser) {
      return {
        status: 401,
        data: messages.invalid_name_or_password,
      };
    }

    const accessToken = jwt.sign({ id: user.id }, "mySecretKeyForAccessToken");
    return {
      status: 200,
      data: {
        id: user.dataValues.id,
        userName: user.dataValues.userName,
        accessToken,
      },
    };
  } catch (error) {
    console.log(error);
    return { status: 401, data: messages.invalid_name_or_password };
  }
};
