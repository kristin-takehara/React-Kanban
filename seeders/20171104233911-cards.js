'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('cards', [
      {
        title: 'Crawl',
        created_by: 1,
        assigned_to: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        status_id: 1,
        priorities_id: 1

      },
      {
        title: 'First Steps',
        created_by: 2,
        assigned_to: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        status_id: 2,
        priorities_id: 2

      },
      {
        title: 'Run',
        created_by: 3,
        assigned_to: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
        status_id: 3,
        priorities_id: 3

      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('cards', null, {});
  }
};
