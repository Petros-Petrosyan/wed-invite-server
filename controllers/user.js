const userServices = require("../services/user");

exports.onboarding = async (req, res) => {
  try {
    const {
      user: { id },
    } = req;

    const { status, data } = await userServices.onboarding(id);
    res.status(status).send(data);
  } catch (error) {
    console.log(error);
  }
};

exports.user = async (req, res) => {
  try {
    const {
      user: { id },
    } = req;

    const { status, data } = await userServices.user(id);

    res.status(status).send(data);
  } catch (error) {
    console.log(error);
  }
};

exports.deleteUser = async (req, res) => {
  const { query } = req;

  const { status, data } = await userServices.deleteUser({
    userId: query?.userId,
  });

  res.status(status).send(data);
};

exports.users = async (req, res) => {
  try {
    const { status, data } = await userServices.users();

    res.status(status).send(data);
  } catch (error) {
    console.log(error);
  }
};

exports.updateLanguage = async (req, res) => {
  const {
    body,
    user: { id },
  } = req;

  const { status, data } = await userServices.updateLanguage({
    body,
    userId: id,
  });

  res.status(status).send(data);
};
