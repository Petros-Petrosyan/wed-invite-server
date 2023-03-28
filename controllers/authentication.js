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

exports.signUpWithGoogle = async (req, res) => {
  try {
    const { body } = req;
    const { status, data } = await authenticationServices.signUpWithGoogle(
      body
    );
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

exports.changePassword = async (req, res) => {
  try {
    const {
      body,
      user: { id },
    } = req;

    const { status, data } = await authenticationServices.changePassword({
      newPassword: body.newPassword,
      password: body.password,
      userId: id,
    });
    res.status(status).send(data);
  } catch (error) {
    console.log(error);
  }
};
