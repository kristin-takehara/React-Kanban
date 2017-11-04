'use strict';

module.exports = function(sequelize, DataTypes) {
  const card = sequelize.define('card', {
    title: {type: DataTypes.STRING, allowNull: false, unique: true}
  },
  {
    tableName: 'cards'
  });

  card.associate = function(models) {
    card.belongsTo(models.user, {
      onUpdate: "CASCADE",
      foreignKey: "status",
      as: "Status",
    });
    card.belongsTo(models.user, {
      onUpdate: "CASCADE",
      foreignKey: "assigned_to",
      as: "Asignee"
    });
  };
  return card;
};