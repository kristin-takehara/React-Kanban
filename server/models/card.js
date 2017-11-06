module.exports = function(sequelize, DataTypes) {
  const card = sequelize.define('card', {
    title: {type: DataTypes.STRING, allowNull: false},
    created_by: {type: DataTypes.INTEGER},
    assigned_to: {type:DataTypes.INTEGER}
  },
  {
    tableName: 'cards'
  });

  card.associate = function(models) {
    card.belongsTo(models.status, {
      foreignKey: 'status_id',
      as: 'Status'
    });
    card.belongsTo(models.priority, {
      foreignKey: 'priorities_id',
      as: 'Priority'
    });
    card.belongsTo(models.user, {
      foreignKey: 'created_by',
      as: 'Creator'
    });
    card.belongsTo(models.user, {
      foreignKey: 'assigned_to',
      as: 'Asignee'
    });
  };
  return card;
};