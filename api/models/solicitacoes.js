'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Solicitacoes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Solicitacoes.belongsTo(models.Usuarios, {
        foreignKey: 'usuario_id'
      })

      Solicitacoes.belongsTo(models.Centros, {
        foreignKey: 'destino_id'
      })
    }
  }
  Solicitacoes.init({
    empresa: DataTypes.STRING,
    codigo: DataTypes.STRING,
    descricao: DataTypes.STRING,
    origem: DataTypes.STRING,
    destino: DataTypes.STRING,
    quantidade: DataTypes.INTEGER,
    fornecedor: DataTypes.STRING,
    obs: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Solicitacoes',
  });
  return Solicitacoes;
};