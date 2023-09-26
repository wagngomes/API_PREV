'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Produtos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

      Produtos.belongsTo(models.Fornecedores, {
        foreignKey: 'fornecedor_id'
      })
      
    }
  }
  Produtos.init({
    empresa: DataTypes.STRING,
    codigo: DataTypes.STRING,
    descricao: DataTypes.STRING,
    id_concatenado: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Produtos',
  });
  return Produtos;
};