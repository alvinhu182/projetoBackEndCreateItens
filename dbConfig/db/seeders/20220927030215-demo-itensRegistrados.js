'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     */ 
      await queryInterface.bulkInsert('ItensRegistrados', 
      [{
        vendedor_id: 1,
        nome: "Espada de fogo",
        disponivel: true,
        preco: "10000",
        createdAt: new Date(),
        updatedAt: new Date() 
      },
      {
        vendedor_id: 2,
        nome: "Arco de gelo",
        disponivel: true,
        preco: "200000",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        vendedor_id: 3,
        nome: "Cajado de luz",
        disponivel: true,
        preco: "300000",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        vendedor_id:1,
        nome: "Adaga venenosa",
        disponivel: true,
        preco: "400000",
        createdAt: new Date(),
        updatedAt: new Date()
      }])
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
