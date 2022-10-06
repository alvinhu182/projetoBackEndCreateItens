'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Itens extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Itens.hasMany(models.itensRegistrados, {
        foreignKey: "itens_id"
      });
      Itens.belongsTo(models.pessoas, {
        foreignKey: "vendedor_id"
      })
      
    }
  }
  Itens.init({
    Nome: DataTypes.STRING,
    tipo: DataTypes.STRING,
    disponivel: DataTypes.BOOLEAN,
    preco: DataTypes.STRING,
    data_listagem: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Itens',
    paranoid: true
  });
  return Itens;
};

