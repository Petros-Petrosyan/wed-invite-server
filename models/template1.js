("use strict");
const { Model, STRING } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Template1 extends Model {}

  Template1.init(
    {
      heroName: {
        type: DataTypes.STRING,
      },
      heroContent: {
        type: DataTypes.STRING,
      },
      heroDate: {
        type: DataTypes.STRING,
      },
      heroBgImage: {
        type: DataTypes.STRING,
      },
      coupleTitle: {
        type: DataTypes.STRING,
      },
      coupleGroom: {
        type: DataTypes.STRING,
      },
      coupleGroomName: {
        type: DataTypes.STRING,
      },
      coupleGroomImage: {
        type: DataTypes.STRING,
      },
      coupleGroomDescription: {
        type: DataTypes.STRING,
      },
      coupleBride: {
        type: DataTypes.STRING,
      },
      coupleBrideName: {
        type: DataTypes.STRING,
      },
      coupleBrideImage: {
        type: DataTypes.STRING,
      },
      coupleBrideDescription: {
        type: DataTypes.STRING,
      },
      timerDate: {
        type: DataTypes.STRING,
      },
      timerTitle: {
        type: DataTypes.STRING,
      },
      timerBgImage: {
        type: DataTypes.STRING,
      },
      eventsTitle: {
        type: DataTypes.STRING,
      },
      eventsCeremonyImage: {
        type: DataTypes.STRING,
      },
      eventsCeremonyTitle: {
        type: DataTypes.STRING,
      },
      eventsCeremonyAddress: {
        type: DataTypes.STRING,
      },
      eventsCeremonyTime: {
        type: DataTypes.STRING,
      },
      eventsCeremonyDescription: {
        type: DataTypes.STRING,
      },
      eventsReceptionImage: {
        type: DataTypes.STRING,
      },
      eventsReceptionTitle: {
        type: DataTypes.STRING,
      },
      eventsReceptionAddress: {
        type: DataTypes.STRING,
      },
      eventsReceptionTime: {
        type: DataTypes.STRING,
      },
      eventsReceptionDescription: {
        type: DataTypes.STRING,
      },
      footerText: {
        type: DataTypes.STRING,
      },
      footerBgImage: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
    }
  );

  return Template1;
};
