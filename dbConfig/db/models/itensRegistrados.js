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
    itensRegistrados_id: DataTypes.INTEGER,
    status:DataTypes.BOOLEAN,
    vendedor_id: DataTypes.INTEGER,
    tipo: DataTypes.STRING,
    preco: DataTypes.STRING,
    data_listagem: DataTypes.DATEONLY
    },
    {
      sequelize,
      modelName: "itensRegistrados",
      paranoid: true
    }
  );
  return itensRegistrados;
};
