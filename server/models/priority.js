module.exports = function(sequelize, DataTypes) {
  const priority = sequelize.define('priority', {
    state: {type: DataTypes.STRING, allowNull: false}
  });

  priority.associate = function(models) {
    priority.hasMany(models.card, {
      onUpdate: "CASCADE",
      foreignKey: {
        name: "priority",
        allowNull: false
      }
    });
  };
  return priority;
};