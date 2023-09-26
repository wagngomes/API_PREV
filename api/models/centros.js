'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Centros extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Centros.hasMany(models.Solicitacoes, {
        foreignKey: 'destino_id'
      })
    }
  }
  Centros.init({
    empresa: DataTypes.STRING,
    centro: DataTypes.STRING,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Centros',
  });
  return Centros;
};