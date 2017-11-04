'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('priorities', [
      {
        state: 'High',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        state: 'Medium',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        state: 'Low',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('statuses', [
      {
        state: 'High',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        state: 'Medium',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        state: 'Low',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  }
};
