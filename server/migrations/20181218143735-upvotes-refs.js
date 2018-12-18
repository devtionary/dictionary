'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Upvotes','uId', {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id',
          as: 'uId'
        } 
    }).then(() => {
      return queryInterface.addColumn('Upvotes','dId',{
          type: Sequelize.INTEGER,
          references: {
            model: 'definitions',
            key: 'id',
            as: 'dId'
          }
      })
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Upvotes');
  }
};