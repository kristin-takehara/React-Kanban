'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('cards', [
      {
        title: 'First Steps',
        createdAt: new Date(),
        updatedAt: new Date(),
        priority: 1,
        status: 1,
        assigned_to: 1
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('cards', [
      {
        title: 'First Steps',
        createdAt: new Date(),
        updatedAt: new Date(),
        priority: 1,
        status: 1,
        assigned_to: 1
      }
    ]);
  }
};