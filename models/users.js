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
        allowNull: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
    }
  );

  return Users;
};
