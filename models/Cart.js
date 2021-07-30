const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Cart extends Model {}

Cart.init (
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      artifact_id: {
          type: DataTypes.INTEGER,
          references: {
              model: 'artifact',
              key: 'id',
          }
      },
      total_price: {
          type: DataTypes.DECIMAL(10,2),
          defaultValue: 0,
      },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'cart',
    }
)

module.exports = Cart;