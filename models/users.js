("use strict");
const { Model, STRING, BOOLEAN } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Users extends Model {}

  Users.init(
    {
      isOnboarded: {
        type: DataTypes.BOOLEAN,
      },
      userName: {
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
    }
  );

  return Users;
};
