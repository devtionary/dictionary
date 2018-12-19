'use strict';
module.exports = (sequelize, DataTypes) => {
  const Examples = sequelize.define('Examples', {
    uId: DataTypes.INTEGER,
    text: DataTypes.STRING,
    dId: DataTypes.INTEGER
  }, {});
  Examples.associate = function(models) {
    // associations can be defined here
    Examples.belongsTo(models.definitions, {
      foreignKey: 'uId',
      onDelete: 'CASCADE'
 });
  };
  return Examples;
};