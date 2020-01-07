module.exports = (sequelize, DataTypes) => {
    const product = sequelize.define('product', {
      name: {
        type: DataTypes.STRING(50)
      },
      price: {
        type: DataTypes.DECIMAL
      },
      description:{
        type: DataTypes.STRING(500)
      },
      image:{
        type: DataTypes.STRING(255)
      },
      published_date:{
        type: DataTypes.DATEONLY
      },
      polygons_type:{
        type: DataTypes.STRING(20)
      },
      polygons_count:{
        type: DataTypes.DECIMAL
      },
      vertices_count:{
        type: DataTypes.DECIMAL
      },
      texture:{
        type: DataTypes.DECIMAL
      },
      material:{
        type: DataTypes.DECIMAL
      },
      rigged:{
        type: DataTypes.DECIMAL
      },
      animated:{
        type: DataTypes.DECIMAL
      },
      uv_mapped:{
        type: DataTypes.DECIMAL
      },
      unwrapped:{
        type: DataTypes.DECIMAL
      }
    })

    product.associate = function (models) {
      // associations can be defined here
      product.hasMany(models.format, { foreignKey: 'product_id' })
      product.belongsToMany(models.order, {foreignKey: 'product_id', through:'order_item'})
    };

    return product
  }