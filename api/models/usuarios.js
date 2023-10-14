'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuarios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Usuarios.hasMany(models.Fornecedores, {
        foreignKey: 'planejador_id'
      })
      Usuarios.hasMany(models.Solicitacoes, {
        foreignKey: 'usuario_id'
      })
      Usuarios.hasMany(models.registros, {
        foreignKey: 'solicitante_id'
      })
    }
  }
  Usuarios.init({
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    senha: DataTypes.STRING,
    perfil: DataTypes.STRING,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Usuarios',
  });
  return Usuarios;
};