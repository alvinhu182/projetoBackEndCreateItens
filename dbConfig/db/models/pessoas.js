"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Pessoas extends Model {
   
    static associate(models) {
      /*
      Pessoas.hasOne(models.itens, {
        foreignKey: "vendedor_id"
      });
     Pessoas.hasOne(models.itensRegistrados, {
        foreignKey: "vendedor_id"
      });
      */
    }
  }
  Pessoas.init(
    {
      nome: DataTypes.STRING,
      vendedor_id: DataTypes.INTEGER,
      email: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Pessoas",
      paranoid: true,
      defaultScope: {
        where: {
          ativo: true
        }
      },
      scopes: {
        all: {
          where: {}
        },
        allFalse: {
          where: {
            ativo: false
          }
        }
      }
    }
  );
  return Pessoas;
};
