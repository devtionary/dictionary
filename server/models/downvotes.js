'use strict';
module.exports = (sequelize, DataTypes) => {
  const Downvotes = sequelize.define('Downvotes', {
    uId: DataTypes.INTEGER,
    dId: DataTypes.INTEGER
  }, {});
  Downvotes.associate = function(models) {
    // associations can be defined here
  };
  return Downvotes;
};