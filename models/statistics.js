("use strict");
const { Model, STRING } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Statistics extends Model {}

  Statistics.init(
    {
      coffeeCount: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
    }
  );

  return Statistics;
};
