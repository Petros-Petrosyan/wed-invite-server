("use strict");
const { Model, STRING, JSON } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Templates extends Model {}

  Templates.init(
    {
      userId: {
        type: DataTypes.STRING,
      },
      url: {
        type: DataTypes.STRING,
      },
      template: {
        type: DataTypes.STRING,
      },
      data: {
        type: DataTypes.JSON,
      },
    },
    {
      sequelize,
    }
  );

  return Templates;
};
