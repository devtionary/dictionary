'use strict';
module.exports = (sequelize, DataTypes) => {
  const Upvotes = sequelize.define('Upvotes', {
    uId: DataTypes.NUMBER,
    dId: DataTypes.NUMBER
  }, {});
  Upvotes.associate = function(models) {
    // associations can be defined here
  };
  return Upvotes;
};