module.exports = (sequelize, DataTypes) => {
    const category = sequelize.define('category', {
      name: {
        type: DataTypes.STRING(45)
      },
      icon: {
        type: DataTypes.STRING(255)
      }
    })
  
    category.associate = function (models) {
      // associations can be defined here
      category.hasMany(models.sub_category, { foreignKey: 'category_id' })
      category.hasMany(models.product, { foreignKey: 'category_id' })
    };
  
    return category
  }