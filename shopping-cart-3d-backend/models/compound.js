module.exports = (sequelize, DataTypes) => {
  const compound = sequelize.define('compound', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    }
  })
  return compound;
}