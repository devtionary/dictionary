'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('definitions','uId',{
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id',
          as: 'uId'
        }
      
    }).then(() => {
      return queryInterface.addColumn('definitions','upvotes',{
          type: Sequelize.INTEGER,
          references: {
            model:'Upvotes',
            key: 'count',
            as:'upvotes'
          }
      }).then(() => {
        return queryInterface.addColumn('definitions','downvotes',{
            type: Sequelize.INTEGER,
            references: {
              model:'Downvotes',
              key: 'count',
              as:'downvotes'
            }
        })
      })
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('definitions');
  }
};