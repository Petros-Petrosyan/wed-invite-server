const authenticationServices = require("../services/authentication");

exports.signUp = async (req, res) => {
  try {
    const { body } = req;
    const { status, data } = await authenticationServices.signUp(body);
    res.status(status).send(data);
  } catch (error) {
    console.log(error);
  }
};

exports.logIn = async (req, res) => {
  try {
    const { body } = req;
    const { status, data } = await authenticationServices.logIn(body);
    res.status(status).send(data);
  } catch (error) {
    console.log(error);
  }
};
