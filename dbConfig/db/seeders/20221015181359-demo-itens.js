"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Itens', 
    [{
      vendedor_id: 1,
      nome_do_item: "Espada de fogo",
      disponivel: true,
      createdAt: new Date(),
      updatedAt: new Date()
   
    },
    {
      vendedor_id: 2,
      nome_do_item: "Arco de gelo",
      disponivel: true,
      createdAt: new Date(),
      updatedAt: new Date()

    },
    {
      vendedor_id: 3,
      nome_do_item: "Cajado de luz",
      disponivel: true,
      createdAt: new Date(),
      updatedAt: new Date()

    },
    {
      vendedor_id:4,
      nome_do_item: "Adaga venenosa",
      disponivel: true,
      createdAt: new Date(),
      updatedAt: new Date()
 
    }],{});
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

