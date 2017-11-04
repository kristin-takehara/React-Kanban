'use strict';

module.exports = function(sequelize, DataTypes) {
  const card = sequelize.define('card', {
    title: {type: DataTypes.STRING, allowNull: false, unique: true},
    created_by_id: DataTypes.INTEGER,
    assigned_to_id: DataTypes.INTEGER,
    priority: DataTypes.INTEGER,
    status: DataTypes.INTEGER
  },
  {
    tableName: 'cards'
  });

  card.associate = function(models) {
    card.belongsTo(models.user, {
      onUpdate: "CASCADE",
      foreignKey: "created_by_id",
      allowNull: false,
      as: "Creator"
    });
    card.belongsTo(models.user, {
      onUpdate: "CASCADE",
      foreignKey: "assigned_to_id",
      as: "Dev"
    });
  }
  return card;
};