'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AdminUsers extends Model {

    static associate(models) {
      // define association here
    }
  }
  AdminUsers.init({
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    senha: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'AdminUsers',
  });
  return AdminUsers;
};
