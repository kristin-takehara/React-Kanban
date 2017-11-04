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
      foreignKey: "assigned_to",
      as: "Tasks"
    });
  };
  return user;
};