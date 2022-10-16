'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('itensRegistrados', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
        
      },
      vendedor_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Pessoas",
          key: "id",
          unique: true
       }
      },
      status: {
        type: Sequelize.BOOLEAN
      },
      item_id: {
        allowNull: false,
        references:{
          model: "Itens",
          key: "id",
          unique: true
        },
        type: Sequelize.INTEGER,
      },
      data_listagem: {
        type: Sequelize.DATEONLY
      },
      preco: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('itensRegistrados');
  }
};