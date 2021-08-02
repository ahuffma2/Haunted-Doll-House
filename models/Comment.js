const {Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}
Comment.init(
  {
    content: { type: DataTypes.STRING, allowNull: false}
  },
  {sequelize,
    timestamps: true,
    freezeTableName: true,
    modelName: 'comment',
  }
);

module.exports = Comment;
