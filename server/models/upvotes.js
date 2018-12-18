'use strict';
module.exports = (sequelize, DataTypes) => {
  const Upvotes = sequelize.define('Upvotes', {
    uId: DataTypes.INTEGER,
    dId: DataTypes.INTEGER
  }, {});
  Upvotes.associate = function(models) {
    // associations can be defined here
  };
  return Upvotes;
};