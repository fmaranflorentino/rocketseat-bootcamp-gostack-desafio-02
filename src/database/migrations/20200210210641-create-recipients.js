'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('recipients', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      street: {
        type: Sequelize.STRING,
        allowNul: false,
      },
      number: {
        type: Sequelize.INTEGER,
        allowNul: false,
      },
      complement: {
        type: Sequelize.STRING,
        allowNul: false,
      },
      state: {
        type: Sequelize.STRING,
        allowNul: false,
      },
      city: {
        type: Sequelize.STRING,
        allowNul: false,
      },
      postal_code: {
        type: Sequelize.STRING,
        allowNul: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNul: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNul: false,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('users');
  },
};
