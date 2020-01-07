module.exports = (sequelize, DataTypes) => {
    const order = sequelize.define('order', {
        order_date: {
            type: DataTypes.DATEONLY
        },
        total: {
            type: DataTypes.DECIMAL
        }
    })

    order.associate = function (models) {
        order.belongsToMany(models.product, {foreignKey: 'order_id', through:'order_item'})
    }

    return order
}