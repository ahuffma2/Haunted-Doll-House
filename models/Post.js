const {Model, DataTypes, DATE } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model{}

Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        user: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        likes: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        dislikes: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        artifact_id: {
            type: DataTypes.INTEGER,
            // allowNull: false,  // gonna leave this commented for now. Might Break Things
            model: 'artifact',
            key: 'id',
        },
        // interactedUserIDs: {
        //     type: DataTypes.ARRAY(DataTypes.INTEGER),
        //     allowNull: true,
        // },
        // comments: {
        //     type: DataTypes.ARRAY(DataTypes.STRING),
        //     allowNull: true,
        // }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "post",
    }
)

module.exports = Post;
