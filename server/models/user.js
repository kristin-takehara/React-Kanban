'use strict';

module.exports = function(sequelize, DataTypes) {
  const user = sequelize.define('user', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  },
    {
    tableName: 'users'
  });

  user.associate = function(models) {
    user.hasMany(models.card, {
      onUpdate: "CASCADE",
      foreignKey: "created_by_id",
      as: "Cards"
    });
    user.hasMany(models.card, {
      onUpdate: "CASCADE",
      foreignKey: "assigned_to_id",
      as: "Tasks"
    });
  }
  return user;
};