"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Pessoas",
      [
        {
          nome: "Alvinhu",
          vendedor_id:1,
          email: "alvinhu@teste.com",
        },
        {
            nome: "Alexandre do Overwatch",
            vendedor_id:2,
            email: "alexandre@teste.com",
        },
        {
            nome: "Thor",
            vendedor_id:3,
            email: "Thor@teste.com",
        },
        {
            nome: "Sebastião",
            vendedor_id:4,
          email: "sebastiao@teste.com",
        },
        {
          nome: "Roberval",
          vendedor_id:5,
          email: "roberval@teste.com",
        },
        {
          nome: "PocosNet",
          vendedor_id:6,
          email: "pocosnet@netruim.com",
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
