"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "AdminUsers",
      [
        {
            nome: "Alvinhu",
            senha: "batata182",
            email: "alvinhu@teste.com",
            createdAt: new Date(),
            updatedAt: new Date()
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
