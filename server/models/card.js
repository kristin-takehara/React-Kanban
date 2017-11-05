module.exports = function(sequelize, DataTypes) {
  const card = sequelize.define('card', {
    title: {type: DataTypes.STRING, allowNull: false}
  },
  {
    tableName: 'cards'
  });

  card.associate = function(models) {
    card.belongsTo(models.status, {
      foreignKey: "status",
      as: "Status"
    });
    card.belongsTo(models.user, {
      foreignKey: "assigned_to",
      as: "Asignee"
    });
  };
  return card;
};