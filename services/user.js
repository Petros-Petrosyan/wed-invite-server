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
