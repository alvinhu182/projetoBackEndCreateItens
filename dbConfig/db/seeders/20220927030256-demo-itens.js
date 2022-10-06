"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Itens', 
    [{
      vendedor_id: 1,
      nome: "Espada de fogo",
      tipo: "Espada",
      disponivel: true,
   
    },
    {
      vendedor_id: 2,
      nome: "Arco de gelo",
      tipo: "Arco",
      disponivel: true,

    },
    {
      vendedor_id: 3,
      nome: "Cajado de luz",
      tipo: "Cajado",
      disponivel: true,

    },
    {
      vendedor_id:1,
      nome: "Adaga venenosa",
      tipo: "Adaga",
      disponivel: true,
 
    }])
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

