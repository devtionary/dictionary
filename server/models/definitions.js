'use strict';
module.exports = (sequelize, DataTypes) => {
  const definitions = sequelize.define('definitions', {
    uId: DataTypes.INTEGER,
    term: DataTypes.STRING,
    voice: DataTypes.STRING,
    text: DataTypes.STRING
  }, {});
  definitions.associate = function(models) {
    //definitions have many examples   
    definitions.hasMany(models.Examples,{
      foreignKey: 'dId', 
    })
    //definitions have many comments
    definitions.hasMany(models.Comments, {
      foreignKey: 'dId'
    })
    //definitions have many upvotes
    definitions.hasMany(models.Upvotes, {
      foreignKey: 'dId'
    })
    //definitions have many downVotes
    definitions.hasMany(models.Downvotes, {
      foreignKey: 'dId'
    })

    definitions.belongsTo(models.users, {
      foreignKey: 'uId',
      onDelete: 'CASCADE'
 });
  };
  return definitions;
};