'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('definitions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
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
          model:'upVotes',
          key: 'count',
          as:'count'
        }
      },
      downvotes: {
        type: Sequelize.INTEGER,
        references: {
          model:'downVotes',
          key: 'count',
          as:'count'
        }
      },
      term: {
        type: Sequelize.STRING
      },
      voice: {
        type: Sequelize.STRING
      },
      text: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('definitions');
  }
};