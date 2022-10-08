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
      Itens.hasOne(models.itensRegistrados, {
        foreignKey: "itens_id"
      });
     /* Itens.belongsTo(models.pessoas, {
        foreignKey: "vendedor_id"
      })
       */
    }
  }
  Itens.init({
    nome_do_item: DataTypes.STRING,
    vendedor_id: DataTypes.INTEGER,
    disponivel: DataTypes.BOOLEAN,
    item_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Itens',
    paranoid: true
  });
  return Itens;
};

