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
      pessoas.hasMany(models.itensRegistrados, {
        foreignKey: "vendedor_id"
      });
    }
  }
  pessoas.init({
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    
  }, {
    sequelize,
    modelName: "pessoas",
    paranoid: true

  }
);
return pessoas;
};