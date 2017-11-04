'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        id: 1,
        name: 'mai mai',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        name: 'kelsey',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        name: 'kristin',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', [
      {
        id: 1,
        name: 'mai mai',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        name: 'kelsey',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        name: 'kristin',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  }
};
