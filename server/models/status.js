module.exports = function(sequelize, DataTypes) {
  const status = sequelize.define('status', {
    type: {type: DataTypes.STRING}
  },
  {
    tablename: 'statuses'
  });

  status.associate = function(models) {
    status.hasMany(models.card, {
      foreignKey: 'status_id',
      as: 'Status'
    });
  };
  return status;
};