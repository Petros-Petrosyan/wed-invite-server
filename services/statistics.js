const { Statistics } = require("../models");

exports.getCoffeeCount = async () => {
  try {
    const statistics = await Statistics.findAll();

    return { status: 200, data: statistics };
  } catch (error) {
    return { status: 500, data: error };
  }
};

exports.addCoffeeCount = async () => {
  try {
    const res = await Statistics.create({
      coffeeCount: "success",
    });

    return { status: 200, data: res.dataValues };
  } catch (error) {
    return { status: 500, data: error };
  }
};
