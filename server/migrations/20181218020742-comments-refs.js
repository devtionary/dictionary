'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Comments','dId',{
        type: Sequelize.INTEGER,
        references: {
          model: 'definitions',
          key: 'id',
          as: 'dId'
        }
    }).then(() => {
      return queryInterface.addColumn('Comments','uId',{
          type: Sequelize.INTEGER,
          references: {
            model: 'users',
            key: 'id',
            as: 'uId'
          }
      })
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Comments');
  }
};
