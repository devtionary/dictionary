'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Downvotes', { 
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      count: {
        type: Sequelize.INTEGER, 
        allowNull: false,
        defaultValue: 0, 
        unique: true
      }
    
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Downvotes');
  }
};