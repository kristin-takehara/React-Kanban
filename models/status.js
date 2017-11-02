module.exports = function(sequelize, DataTypes) {
  const status = sequelize.define('status', {
    state: {type: DataTypes.STRING, allowNull: false},
    createdAt: {type: DataTypes.DATE, allowNull: false},
    updatedAt: {type: DataTypes.DATE, allowNull: false}
  });

  status.associate = function(models) {
    status.hasMany(models.card, {
      onUpdate: "CASCADE",
      foreignKey: {
        name: "status",
        allowNull: false
      }
    });
  };
  return status;
};