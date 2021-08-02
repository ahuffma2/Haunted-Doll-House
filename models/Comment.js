const {Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}
Comment.init(
  {
    content: { type: DataTypes.STRING, allowNull: false},
    userId: {
      type: DataTypes.INTEGER,
      references: {
          model: 'user',
          key: 'id',
      }
    },
    artifactId: {
      type: DataTypes.INTEGER,
      references: {
          model: 'artifact',
          key: 'id',
      }
  },
  },
  {sequelize,
    timestamps: true,
    freezeTableName: true,
    modelName: 'comment',
  }
);

module.exports = Comment;
