'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('itens', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      disponivel: {
        type: Sequelize.BOOLEAN
      },
      vendedor_id: {
        type: Sequelize.INTEGER,
        reference: {
          model: "Pessoas", key: "id",
        }
      },
      nome_do_item: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('itens');
  }
};