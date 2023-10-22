'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn('Requisicoes', 'data_prevista', {
          type: Sequelize.DataTypes.DATEONLY,
          after: "obs" 
        }, { transaction: t }),

      ]);
    });
  },

  async down (queryInterface, Sequelize) {

  }
};
