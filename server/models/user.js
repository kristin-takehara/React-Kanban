module.exports = function(sequelize, DataTypes) {
  const user = sequelize.define('user', {
    name: {
      type: DataTypes.STRING
    }
  },
    {
    tableName: 'users'
  });

  user.associate = function(models) {
    user.hasMany(models.card, {
      foreignKey: 'created_by',
      as: 'Cards'
    });
    user.hasMany(models.card, {
      foreignKey: 'assigned_to',
      as: 'Tasks'
    });
  };
  return user;
};