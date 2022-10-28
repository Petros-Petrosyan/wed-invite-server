const { Template1 } = require("../models");
const { messages } = require("../constants/messages");
const { v4: uuidv4 } = require("uuid");

exports.getTemplate1 = async ({ userId }) => {
  try {
    const Template1 = await Template1.findOne({
      where: { userId: Number(userId) },
    });

    return { status: 200, data: Template1.dataValues };
  } catch (error) {
    return { status: 500, data: error };
  }
};

exports.addTemplate1 = async ({ body, userId }) => {
  try {
    const template1 = await Template1.findOne({
      where: { userId: Number(userId) },
    });
    if (!!template1) {
      return { status: 500, data: messages.has_data };
    }

    const response = await Template1.create({
      url: uuidv4(),
      ...body,
    });
    return { status: 200, data: response.dataValues };
  } catch (error) {
    return { status: 500, data: error };
  }
};

exports.updatePersonalDetails = async ({ body, userId }) => {
  try {
    await Template1.update({ ...body }, { where: { userId: Number(userId) } });
    const response = await Template1.findOne({
      where: { userId: Number(userId) },
    });

    return { status: 200, data: response.dataValues };
  } catch (error) {
    return { status: 500, data: error };
  }
};
