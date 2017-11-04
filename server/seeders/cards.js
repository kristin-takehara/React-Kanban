'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        id: 1,
        title: 'first steps',
        created_by_id: 2,
        assigned_to_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        priority: 2,
        status: 1
      },
      {
        id: 2,
        title: 'change diaper',
        created_by_id: 1,
        assigned_to_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
        priority: 1,
        status: 1
      },
      {
        id: 3,
        title: 'sleep',
        created_by_id: 3,
        assigned_to_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
        priority: 1,
        status: 2
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', [
       {
        id: 1,
        title: 'first steps',
        created_by_id: 2,
        assigned_to_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        priority: 2,
        status: 1
      },
      {
        id: 2,
        title: 'change diaper',
        created_by_id: 1,
        assigned_to_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
        priority: 1,
        status: 1
      },
      {
        id: 3,
        title: 'sleep',
        created_by_id: 3,
        assigned_to_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
        priority: 1,
        status: 2
      }
    ]);
  }
};