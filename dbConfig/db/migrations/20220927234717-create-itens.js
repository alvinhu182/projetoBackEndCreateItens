'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Itens', {
      item_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome_do_item: {
        type: Sequelize.STRING
      },
      disponivel: {
        type: Sequelize.BOOLEAN
      },
      vendedor_id: {
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Itens');
  }
};