module.exports = (sequelize, DataTypes) => {
    const format = sequelize.define('format', {
      file_format:{
        type: DataTypes.STRING(10)
      }
    })    
    return format
}