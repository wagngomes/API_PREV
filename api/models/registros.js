'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class registros extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      registros.belongsTo(models.Usuarios, {
        foreignKey: 'solicitante_id'
      })
    }
  }
  registros.init({
    codigo: DataTypes.STRING,
    descricao: DataTypes.STRING,
    fornecedor: DataTypes.STRING,
    planejador: DataTypes.STRING,
    quantidade: DataTypes.INTEGER,
    destino: DataTypes.STRING,
    solicitante_nome: DataTypes.STRING,
    solicitante_email: DataTypes.STRING,
    tipo: DataTypes.STRING,
    obs: DataTypes.STRING,
    dias_em_aberto: DataTypes.FLOAT,
    data_fechamento: DataTypes.DATEONLY,
    email_enviado: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'registros',
  });
  return registros;
};