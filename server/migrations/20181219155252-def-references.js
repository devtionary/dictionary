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
      
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('definitions');
  }
};