module.exports = function(sequelize, DataTypes) {
  const card = sequelize.define('card', {
    title: {type: DataTypes.STRING, allowNull: false, unique: true}
  });

  card.associate = function(models) {
    card.belongsTo(models.user, {
      onUpdate: "CASCADE",
      foreignKey: {
        name: "created_by",
        allowNull: false
      }
    });
    card.hasMany(models.user, {
      onUpdate: "CASCADE",
      foreignKey: {
        assignment: "assigned_to",
        allowNull: true
      }
    });
  };
  return card;
};