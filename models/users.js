("use strict");
const { Model, STRING } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Users extends Model {}

  Users.init(
    {
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
