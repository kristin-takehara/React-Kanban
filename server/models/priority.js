module.exports = function(sequelize, DataTypes) {
  const priority = sequelize.define('priority', {
    type: {type: DataTypes.STRING}
  },
  {
    tablename: 'priorities'
  });

  priority.associate = function(models) {
    priority.hasMany(models.card, {
      foreignKey: 'priorities_id',
      as: 'Priority'
    });
  };
  return priority;
};