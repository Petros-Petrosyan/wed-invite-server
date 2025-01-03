const { Messages, Templates } = require("../models");

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
      url: String(url),
      guests: String(guests),
      userId: String(template.dataValues.userId),
    });

    return { status: 200, data: res.dataValues };
  } catch (error) {
    return { status: 500, data: error };
  }
};
