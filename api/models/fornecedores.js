'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Fornecedores extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Fornecedores.belongsTo(models.Usuarios, {
        foreignKey: 'planejador_id'
      })

      Fornecedores.hasMany(models.Produtos, {
        foreignKey: 'fornecedor_id'
      })

    }
  }
  Fornecedores.init({
    descricao: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Fornecedores',
  });
  return Fornecedores;
};