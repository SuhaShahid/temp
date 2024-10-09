'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Posts', 'isDeleted', {
      type: Sequelize.BOOLEAN,
      defaultValue: false,  
      allowNull: false
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Posts', 'isDeleted');
  }
};
