'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('statuses', [
      {
        type: 'In-Queue',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'In-Process',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'Done',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('statuses', null, {});
  }
};
