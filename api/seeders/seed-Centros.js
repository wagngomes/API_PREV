'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

  await queryInterface.bulkInsert('Centros', [
    {
     empresa: "Mafra",
     centro: "Mafra - RIB",
     status: 1,
     createdAt: new Date(),
     updatedAt: new Date()
    },
    {
     empresa: "Mafra",
     centro: "Mafra - LDA",
     status: 1,
     createdAt: new Date(),
     updatedAt: new Date()
    },
    {
     empresa: "Mafra",
     centro: "Mafra - CTL",
     status: 1,
     createdAt: new Date(),
     updatedAt: new Date()
    },
    {
     empresa: "Mafra",
     centro: "Mafra - BRA",
     status: 1,
     createdAt: new Date(),
     updatedAt: new Date()
    },
    {
     empresa: "Mafra",
     centro: "Mafra - REC",
     status: 1,
     createdAt: new Date(),
     updatedAt: new Date()
    },
    {
     empresa: "Mafra",
     centro: "Mafra - LAJ",
     status: 1,
     createdAt: new Date(),
     updatedAt: new Date()
    },
    {
     empresa: "Mafra",
     centro: "Mafra - NSR",
     status: 1,
     createdAt: new Date(),
     updatedAt: new Date()
    },
    {
     empresa: "Mafra",
     centro: "Mafra - RGN",
     status: 1,
     createdAt: new Date(),
     updatedAt: new Date()
    },
    {
     empresa: "Mafra",
     centro: "Mafra - RIO",
     status: 1,
     createdAt: new Date(),
     updatedAt: new Date()
    }
   ], {});
    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
