module.exports = (sequelize,DataTypes) => {
    const order_item = sequelize.define('order_item',{
        product_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: 'product',
              key: 'id'
            }
          },
          order_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: 'order',
              key: 'id'
            }
          }
        })
    return order_item;
}