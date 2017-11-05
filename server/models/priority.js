module.exports = function(sequelize, DataTypes) {
  const priority = sequelize.define('priority', {
    state: {type: DataTypes.STRING}
  });

  priority.associate = function(models) {
    priority.hasMany(models.card, {
      foreignKey: "priority"
    });
  };
  return priority;
};