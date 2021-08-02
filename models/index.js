const User = require("./User");
const Artifact = require("./Artifact");
const Post = require("./Post");
const Cart = require("./Cart");
const Comment = require("./Comment");

Post.belongsTo(User, {
    foreignKey : 'userId',
});

Post.hasOne(Artifact, {
    foreignKey:'artifactId',
    onDelete: 'CASCADE'
});

Post.hasMany(Comment, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});

Comment.belongsTo(User , {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
})

Cart.belongsTo(User, {
    foreignKey: 'userId',
})

Cart.hasMany(Artifact, {
    foreignKey : 'artifactId'
})
module.exports = { User, Artifact, Post, Cart };
