'use strict';
module.exports = (sequelize, DataTypes) => {
  const Examples = sequelize.define('Examples', {
    uId: DataTypes.NUMBER,
    text: DataTypes.STRING,
    dId: DataTypes.NUMBER
  }, {});
  Examples.associate = function(models) {
    // associations can be defined here
  };
  return Examples;
};