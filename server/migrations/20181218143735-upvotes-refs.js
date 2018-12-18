'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Upvotes', {
      uId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id',
          as: 'uId'
        }
      },
      dId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'definitions',
          key: 'id',
          as: 'dId'
        }
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Upvotes');
  }
};