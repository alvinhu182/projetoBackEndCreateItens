"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Pessoas",
      [
        {
            nome: "Alvinhu",
            id:1,
            email: "alvinhu@teste.com",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            nome: "Alexandre do Overwatch",
            id:2,
            email: "alexandre@teste.com",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            nome: "Thor",
            id:3,
            email: "Thor@teste.com",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            nome: "Sebastião",
            id:4,
            email: "sebastiao@teste.com",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            nome: "Roberval",
            id:5,
            email: "roberval@teste.com",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            nome: "PocosNet",
            id:6,
            email: "pocosnet@netruim.com",
            createdAt: new Date(),
            updatedAt: new Date()
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
