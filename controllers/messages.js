const messagesServices = require("../services/messages");

exports.getMessages = async (req, res) => {
  try {
    const {
      user: { id },
    } = req;

    const { status, data } = await messagesServices.getMessages({ id });
    res.status(status).send(data);
  } catch (error) {
    console.log(error);
  }
};

exports.addMessages = async (req, res) => {
  try {
    const { body } = req;
    const { status, data } = await messagesServices.addMessages(body.data);

    res.status(status).send(data);
  } catch (error) {
    console.log(error);
  }
};
