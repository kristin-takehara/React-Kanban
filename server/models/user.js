module.exports = function(sequelize, DataTypes) {
  const user = sequelize.define('user', {
    name: {type: DataTypes.STRING, allowNull: false, unique: true}
  });

  user.associate = function(models) {
    user.hasMany(models.card, {
      onUpdate: "CASCADE",
      foreignKey: {
        name: "assigned_to",
        allowNull: false
      }
    });
  };
  return user;
};