module.exports = function(sequelize, DataTypes) {
  const priority = sequelize.define('priority', {
    state: {type: DataTypes.STRING, allowNull: false},
    createdAt: {type: DataTypes.DATE, allowNull: false},
    updatedAt: {type: DataTypes.DATE, allowNull: false}
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