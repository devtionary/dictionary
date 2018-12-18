'use strict';
module.exports = (sequelize, DataTypes) => {
  const Downvotes = sequelize.define('Downvotes', {
    uId: DataTypes.NUMBER,
    Did: DataTypes.NUMBER
  }, {});
  Downvotes.associate = function(models) {
    // associations can be defined here
  };
  return Downvotes;
};