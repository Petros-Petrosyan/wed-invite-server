const template1Services = require("../services/template1");

exports.getTemplate1 = async (req, res) => {
  try {
    const { user } = req;
    const { status, data } = await template1Services.getTemplate1({
      userId: user?.id,
    });
    res.status(status).send(data);
  } catch (error) {
    console.log(error);
  }
};

exports.addTemplate1 = async (req, res) => {
  const {
    body,
    user: { id },
  } = req;
  const { status, data } = await template1Services.addTemplate1({
    body,
    userId: id,
  });

  res.status(status).send(data);
};

exports.updateTemplate1 = async (req, res) => {
  const {
    body,
    user: { id },
  } = req;

  const { status, data } = await template1Services.updateTemplate1({
    body,
    userId: id,
  });

  res.status(status).send(data);
};
