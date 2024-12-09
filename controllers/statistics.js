const statisticsServices = require("../services/statistics");

exports.getCoffeeCount = async (req, res) => {
  try {
    const { status, data } = await statisticsServices.getCoffeeCount();
    res.status(status).send(data);
  } catch (error) {
    console.log(error);
  }
};

exports.addCoffeeCount = async (req, res) => {
  try {
    const { status, data } = await statisticsServices.addCoffeeCount();

    res.status(status).send(data);
  } catch (error) {
    console.log(error);
  }
};
