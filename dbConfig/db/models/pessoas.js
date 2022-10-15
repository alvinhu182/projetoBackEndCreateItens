'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pessoas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      pessoas.hasOne(models.itens, {
        foreignKey: "vendedor_id"
      });
      pessoas.hasOne(models.itensRegistrados, {
        foreignKey: "vendedor_id"
      });
    }
  }
  pessoas.init({
    vendedor_id: DataTypes.INTEGER,
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
  }, {
    sequelize,
    modelName: "pessoas",
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
return pessoas;
};

