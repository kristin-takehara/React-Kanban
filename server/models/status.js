module.exports = function(sequelize, DataTypes) {
  const status = sequelize.define('status', {
    state: {type: DataTypes.STRING}
  });

  status.associate = function(models) {
    status.hasMany(models.card, {
      foreignKey: "status",
      as: "Cards"
    });
  };
  return status;
};