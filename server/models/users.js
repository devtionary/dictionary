'use strict';
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    avatar: DataTypes.STRING,
    credibility: DataTypes.NUMBER
  }, {});
  users.associate = function(models) {
    //users have many definitions
    users.hasMany(models.definitions,{
      foreignKey: 'uId', 
    })
    //users have many comments
    users.hasMany(models.comments, {
      foreignKey: 'uId'
    })
    //users have many examples
    users.hasMany(models.examples, {
      foreignKey: 'uId'
    })
    //users have many upvotes
    users.hasMany(models.upVotes, {
      foreignKey: 'uId'
    })
    //users have many downVotes
    users.hasMany(models.downVotes, {
      foreignKey: 'uId'
    })
  };
  return users;
};