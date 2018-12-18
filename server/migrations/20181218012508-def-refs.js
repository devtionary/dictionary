'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('definitions',{
      uId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id',
          as: 'uId'
        }
      },
      upvotes: {
        type: Sequelize.INTEGER,
        references: {
          model:'upvotes',
          key: 'count',
          as:'count'
        }
      },
      downvotes: {
        type: Sequelize.INTEGER,
        references: {
          model:'downvotes',
          key: 'count',
          as:'count'
        }
      },
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('definitions');
  }
};
