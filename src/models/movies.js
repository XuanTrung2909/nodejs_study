'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class movies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  movies.init({
    name: DataTypes.STRING,
    trailer: DataTypes.STRING,
    poster: DataTypes.STRING,
    description: DataTypes.STRING,
    startTime: DataTypes.DATE,
    evaluate: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'movies',
  });
  return movies;
};