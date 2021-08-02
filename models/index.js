const User = require("./User");
const Artifact = require("./Artifact");
//const Post = require("./Post");
//const Cart = require("./Cart");
const Comment = require("./Comment");


User.hasMany(Comment, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
})

User.hasMany(Artifact, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
})

Artifact.hasMany(Comment ,{
    foreignKey: 'artifactId',
    onDelete:'CASCADE'
})

Artifact.belongsTo(User, {
    foreignKey: 'userId',
})

Comment.belongsTo(User , {
    foreignKey: 'userId',
})

Comment.belongsTo(Artifact, {
    foreignKey: 'artifactId'
})

// Cart.belongsTo(User, {
//     foreignKey: 'userId',
// })

// Cart.hasMany(Artifact, {
//     foreignKey : 'artifactId'
// })
module.exports = { User, Artifact, Comment };
