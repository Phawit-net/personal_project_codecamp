module.exports = (sequelize, DataTypes) => {
    const compound = require('./compound')(sequelize,DataTypes)
    const format = sequelize.define('format', {
      name: {
        type: DataTypes.STRING(50)
      },
      file_format:{
        type: DataTypes.STRING(10)
      }
    })    

    format.associate = function (models) {
        // associations can be defined here
        format.belongsToMany(models.product,{through:compound})
      };
    return format
}