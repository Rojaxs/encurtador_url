'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UrlDB extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UrlDB.init({
    url: DataTypes.STRING,
    short_url: DataTypes.STRING,
    amount_of_access: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'UrlDB',
  });
  return UrlDB;
};