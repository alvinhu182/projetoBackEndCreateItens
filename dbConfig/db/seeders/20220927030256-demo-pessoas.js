"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Pessoas",
      [
        {
          nome: "Alvinhu",
          ativo: true,
          email: "alvinhu@teste.com",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
            nome: "Alexandre do Overwatch",
            ativo: true,
            email: "alexandre@teste.com",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            nome: "Thor",
            ativo: true,
            email: "Thor@teste.com",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            nome: "Sebastião",
          ativo: true,
          email: "sebastiao@teste.com",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nome: "Roberval",
          ativo: true,
          email: "roberval@teste.com",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nome: "PocosNet",
          ativo: false,
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
