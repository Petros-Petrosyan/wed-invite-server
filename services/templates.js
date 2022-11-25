const { Templates } = require("../models");
const { messages } = require("../constants/messages");
const { v4: uuidv4 } = require("uuid");
const { STRING } = require("sequelize");

exports.getTemplateByUrl = async ({ url }) => {
  try {
    const templates = await Templates.findOne({
      where: { url },
    });

    return { status: 200, data: templates.dataValues };
  } catch (error) {
    return { status: 500, data: error };
  }
};

exports.getTemplates = async ({ userId }) => {
  try {
    const templates = await Templates.findOne({
      where: { userId: String(userId) },
    });

    return { status: 200, data: templates.dataValues };
  } catch (error) {
    return { status: 500, data: error };
  }
};

exports.getTemplateKey = async ({ userId }) => {
  try {
    const templates = await Templates.findOne({
      where: { userId: String(userId) },
    });

    return {
      status: 200,
      data: {
        key: templates.dataValues.url,
        template: templates.dataValues.template,
      },
    };
  } catch (error) {
    return { status: 500, data: error };
  }
};

exports.addTemplates = async ({ body, userId }) => {
  try {
    const templates = await Templates.findOne({
      where: { userId: String(userId) },
    });

    if (!!templates) {
      return { status: 500, data: messages.has_data };
    }

    const response = await Templates.create({
      url: uuidv4(),
      data: body.data,
      template: body.template,
      userId: String(userId),
    });
    return { status: 200, data: response.dataValues };
  } catch (error) {
    return { status: 500, data: error };
  }
};

exports.updateTemplates = async ({ body, userId }) => {
  try {
    await Templates.update({ ...body }, { where: { userId: String(userId) } });
    const response = await Templates.findOne({
      where: { userId: String(userId) },
    });

    return { status: 200, data: response.dataValues };
  } catch (error) {
    return { status: 500, data: error };
  }
};

exports.deleteTemplates = async ({ userId }) => {
  try {
    await Templates.destroy({ where: { userId: String(userId) } });

    return { status: 200, data: messages.WEB_PAGE_DELETED };
  } catch (error) {
    return { status: 500, data: error };
  }
};
