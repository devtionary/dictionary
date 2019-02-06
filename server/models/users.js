'use strict';
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    googleId: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    avatar: DataTypes.STRING,
    credibility: DataTypes.INTEGER
  }, {});
  users.associate = function(models) {
    //users have many definitions
    users.hasMany(models.definitions,{
      foreignKey: 'uId', 
    })
    //users have many comments
    users.hasMany(models.Comments, {
      foreignKey: 'uId'
    })
    //users have many examples
    users.hasMany(models.Examples, {
      foreignKey: 'uId'
    })
    //users have many upvotes
    users.hasMany(models.Upvotes, {
      foreignKey: 'uId'
    })
    //users have many downVotes
    users.hasMany(models.Downvotes, {
      foreignKey: 'uId'
    })
  };
  return users;
};