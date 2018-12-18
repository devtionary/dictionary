'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('definitions',{
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
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
