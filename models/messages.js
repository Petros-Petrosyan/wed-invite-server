("use strict");
const { Model, STRING } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Messages extends Model {}

  Messages.init(
    {
      userId: {
        type: DataTypes.STRING,
      },
      message: {
        type: DataTypes.STRING,
      },
      guests: {
        type: DataTypes.STRING,
      },
      name: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
    }
  );

  return Messages;
};
