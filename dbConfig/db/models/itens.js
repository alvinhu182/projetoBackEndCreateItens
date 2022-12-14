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
        foreignKey: "item_id"
      });
      Itens.belongsTo(models.pessoas, {
        constraints: true,
        foreignKey: "vendedor_id"
      })
       
    }
  }
  Itens.init({
    nome_do_item: DataTypes.STRING,
    vendedor_id: DataTypes.INTEGER,
    disponivel: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'Itens',
    paranoid: true
  });
  return Itens;
};