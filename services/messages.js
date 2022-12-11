const { Messages, Templates } = require("../models");
const { showMessage } = require("../utils/showMessage");

exports.getMessages = async ({ id }) => {
  try {
    const messages = await Messages.findAll({
      where: { userId: String(id) },
    });

    return { status: 200, data: messages };
  } catch (error) {
    return { status: 500, data: error };
  }
};

exports.addMessages = async ({ url, message, name, guests }) => {
  try {
    const template = await Templates.findOne({
      where: { url },
    });

    const res = await Messages.create({
      message: message || "",
      name,
      guests: String(guests),
      userId: String(template.dataValues.userId),
    });

    showMessage(res.dataValues);

    return { status: 200, data: res.dataValues };
  } catch (error) {
    showMessage(error);
    return { status: 500, data: error };
  }
};
