"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class itensRegistrados extends Model {
   /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
         // define association here
      itensRegistrados.belongsTo(models.Pessoas, {
        foreignKey: "vendedor_id"
      });
      itensRegistrados.belongsTo(models.Itens, {
        foreignKey: "item_id"
      });
    }
  }
  itensRegistrados.init({
    Nome: DataTypes.STRING,
    tipo: DataTypes.STRING,
    disponivel: DataTypes.BOOLEAN,
    preco: DataTypes.STRING
    },
    {
      sequelize,
      modelName: "ItensRegistrados",
      paranoid: true
    }
  );
  return itensRegistrados;
};
