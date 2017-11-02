module.exports = function(sequelize, DataTypes) {
  const user = sequelize.define('user', {
    name: {type: DataTypes.STRING, allowNull: false, unique: true}
  });
  return user;
};