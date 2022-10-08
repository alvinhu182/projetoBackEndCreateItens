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
        item_id:1,
        itensRegistrados_id:1,
        vendedor_id: 1,
        disponivel: true,
        preco: "10000",
        data_listagem: new Date(),

      },
      {
        item_id:2,
        itensRegistrados_id:2,
        vendedor_id: 2,
        disponivel: true,
        preco: "200000",
        data_listagem: new Date(),
      },
      {
        item_id:3,
        itensRegistrados_id:3,
        vendedor_id: 3,
        disponivel: true,
        preco: "300000",
        data_listagem: new Date(),
      },
      {
        item_id:4,
        itensRegistrados_id:4,
        vendedor_id:1,
        disponivel: true,
        preco: "400000",
        data_listagem: new Date(),
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
