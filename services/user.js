const { messages } = require("../constants/messages");
const { Users } = require("../models");

exports.onboarding = async (id) => {
  try {
    const user = await Users.findOne({ where: { id: String(id) } });

    if (!user) {
      return {
        status: 401,
        data: messages.not_authenticated,
      };
    }

    const updatedUser = await user.update({ isOnboarded: true });
    return {
      status: 200,
      data: { isOnboarded: updatedUser.isOnboarded },
    };
  } catch (error) {
    return { status: 401, data: messages.invalid_name_or_password };
  }
};

exports.user = async (id) => {
  try {
    const user = await Users.findOne({ where: { id: String(id) } });

    if (!user) {
      return {
        status: 401,
        data: messages.not_authenticated,
      };
    }

    return {
      status: 200,
      data: user,
    };
  } catch (error) {
    return { status: 401, data: messages.invalid_name_or_password };
  }
};

exports.deleteUser = async ({ userId }) => {
  try {
    await Users.destroy({
      where: { id: String(userId) },
    });

    return { status: 200, data: "User successfully deleted" };
  } catch (error) {
    return { status: 500, data: error };
  }
};

exports.users = async (id) => {
  try {
    const users = await Users.findAll();

    if (!users) {
      return {
        status: 401,
        data: messages.not_authenticated,
      };
    }

    return {
      status: 200,
      data: users,
    };
  } catch (error) {
    return { status: 401, data: messages.invalid_name_or_password };
  }
};

exports.updateLanguage = async ({ body, userId }) => {
  try {
    await Users.update({ ...body }, { where: { id: String(userId) } });
    const response = await Users.findOne({
      where: { id: String(userId) },
    });

    return { status: 200, data: response.lang };
  } catch (error) {
    return { status: 500, data: error };
  }
};
