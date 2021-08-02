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
            defaultValue:'1',
        },
        price: {
            type: DataTypes.DECIMAL(10,2),
            allowNull: true,
        },
        likes: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        dislikes: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },      
        userId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            }
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