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
        id:1,
        item_id:1,
        vendedor_id: 1,
        status: true,
        preco: "10000",
        data_listagem: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {  
        id:2,
        item_id:2,
        vendedor_id: 2,
        status: true,
        preco: "200000",
        data_listagem: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id:3,
        item_id:3,
        vendedor_id: 3,
        status: true,
        preco: "300000",
        data_listagem: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id:4,
        item_id:4,
        vendedor_id:4,
        status: true,
        preco: "400000",
        data_listagem: new Date(),
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
