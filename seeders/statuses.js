'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('statuses', [
      {
        state: 'In-Queue',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        state: 'In-Process',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        state: 'Done',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('statuses', [
      {
        state: 'In-Queue',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        state: 'In-Process',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        state: 'Done',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  }
};
