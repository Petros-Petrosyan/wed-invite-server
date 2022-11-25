const templatesServices = require("../services/templates");

exports.getTemplateKey = async (req, res) => {
  try {
    const { user } = req;
    const { status, data } = await templatesServices.getTemplateKey({
      userId: user?.id,
    });
    res.status(status).send(data);
  } catch (error) {
    console.log(error);
  }
};

exports.getTemplateByUrl = async (req, res) => {
  try {
    const { query } = req;
    const { status, data } = await templatesServices.getTemplateByUrl({
      url: query?.url,
    });

    res.status(status).send(data);
  } catch (error) {
    console.log(error);
  }
};

exports.getTemplates = async (req, res) => {
  try {
    const { user } = req;
    const { status, data } = await templatesServices.getTemplates({
      userId: user?.id,
    });
    res.status(status).send(data);
  } catch (error) {
    console.log(error);
  }
};

exports.addTemplates = async (req, res) => {
  const {
    body,
    user: { id },
  } = req;

  const { status, data } = await templatesServices.addTemplates({
    body,
    userId: id,
  });

  res.status(status).send(data);
};

exports.updateTemplates = async (req, res) => {
  const {
    body,
    user: { id },
  } = req;

  const { status, data } = await templatesServices.updateTemplates({
    body,
    userId: id,
  });

  res.status(status).send(data);
};

exports.deleteTemplates = async (req, res) => {
  const {
    user: { id },
  } = req;

  const { status, data } = await templatesServices.deleteTemplates({
    userId: id,
  });

  res.status(status).send(data);
};
