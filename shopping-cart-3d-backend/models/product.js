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
      }
    })
  
    return product
  }