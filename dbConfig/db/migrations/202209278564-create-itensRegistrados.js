"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("itensRegistrados", {
      vendedor_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "pessoas", key: "id" }
      },
      status: {
        type: Sequelize.STRING
      },
      itensRegistrados_Id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "itens", key: "id" },
        primaryKey: true,
        autoIncrement: true
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
    await queryInterface.dropTable("itensRegistrados");
  }
};

