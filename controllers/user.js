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
