'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        name: 'mai mai',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'kelsey',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'kristin',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
