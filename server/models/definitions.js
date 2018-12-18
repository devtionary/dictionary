'use strict';
module.exports = (sequelize, DataTypes) => {
  const definition = sequelize.define('definitions', {
    uId: DataTypes.NUMBER,
    upvotes: DataTypes.NUMBER,
    downvotes: DataTypes.NUMBER,
    term: DataTypes.STRING,
    voice: DataTypes.STRING,
    text: DataTypes.STRING
  }, {});
  definitions.associate = function(models) {
    //definitions have many examples   
    definitions.hasMany(models.examples,{
      foreignKey: 'dId', 
    })
    //definitions have many comments
    definitions.hasMany(models.comments, {
      foreignKey: 'dId'
    })
    //definitions have many upvotes
    definitions.hasMany(models.upVotes, {
      foreignKey: 'dId'
    })
    //definitions have many downVotes
    definitions.hasMany(models.downvotes, {
      foreignKey: 'dId'
    })
  };
  return definitions;
};