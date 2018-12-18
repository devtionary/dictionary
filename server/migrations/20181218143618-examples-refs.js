'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Examples', 'uId',{
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id',
          as: 'uId'
        }
      
    }).then(() => {
      return queryInterface.addColumn('Examples','dId', {
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
    return queryInterface.removeColumn('Examples');
  }
};