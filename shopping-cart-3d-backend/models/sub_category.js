module.exports = (sequelize, DataTypes) => {
    const sub_category = sequelize.define('sub_category', {
      name: {
        type: DataTypes.STRING(45)
      }
    })
  
    sub_category.associate = function (models) {
      // associations can be defined here
      sub_category.hasMany(models.product, { foreignKey: 'sub_category_id' })
    };

    return sub_category
  }