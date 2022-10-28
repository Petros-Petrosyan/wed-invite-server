"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Template1", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      heroName: {
        type: Sequelize.STRING,
      },
      heroContent: {
        type: Sequelize.STRING,
      },
      heroDate: {
        type: Sequelize.STRING,
      },
      heroBgImage: {
        type: Sequelize.STRING,
      },
      coupleTitle: {
        type: Sequelize.STRING,
      },
      coupleGroom: {
        type: Sequelize.STRING,
      },
      coupleGroomName: {
        type: Sequelize.STRING,
      },
      coupleGroomImage: {
        type: Sequelize.STRING,
      },
      coupleGroomDescription: {
        type: Sequelize.STRING,
      },
      coupleBride: {
        type: Sequelize.STRING,
      },
      coupleBrideName: {
        type: Sequelize.STRING,
      },
      coupleBrideImage: {
        type: Sequelize.STRING,
      },
      coupleBrideDescription: {
        type: Sequelize.STRING,
      },
      timerDate: {
        type: Sequelize.STRING,
      },
      timerTitle: {
        type: Sequelize.STRING,
      },
      timerBgImage: {
        type: Sequelize.STRING,
      },
      eventsTitle: {
        type: Sequelize.STRING,
      },
      eventsCeremonyImage: {
        type: Sequelize.STRING,
      },
      eventsCeremonyTitle: {
        type: Sequelize.STRING,
      },
      eventsCeremonyAddress: {
        type: Sequelize.STRING,
      },
      eventsCeremonyTime: {
        type: Sequelize.STRING,
      },
      eventsCeremonyDescription: {
        type: Sequelize.STRING,
      },
      eventsReceptionImage: {
        type: Sequelize.STRING,
      },
      eventsReceptionTitle: {
        type: Sequelize.STRING,
      },
      eventsReceptionAddress: {
        type: Sequelize.STRING,
      },
      eventsReceptionTime: {
        type: Sequelize.STRING,
      },
      eventsReceptionDescription: {
        type: Sequelize.STRING,
      },
      footerText: {
        type: Sequelize.STRING,
      },
      footerBgImage: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Template1");
  },
};
