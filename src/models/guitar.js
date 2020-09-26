'use strict';
module.exports = (sequelize, DataTypes) => {
  const Guitar = sequelize.define('Guitar', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.DECIMAL
  }, {});
  Guitar.associate = function(models) {
    // associations can be defined here
  };
  return Guitar;
};