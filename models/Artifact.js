const {Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Artifact extends Model {}

Artifact.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        filename: {
            type: DataTypes.STRING,
            allowNull:false,
            defaultValue:'product-example-1',
        },
        price: {
            type: DataTypes.DECIMAL(10,2),
            allowNull: true,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "artifact",
    }
)

module.exports = Artifact;