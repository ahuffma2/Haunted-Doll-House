const User = require("./User");
const Artifact = require("./Artifact");
const Post = require("./Post");
const Cart = require("./Cart");

//relations go here
User.hasMany(Post);

Post.hasOne(Artifact, {
  foreignKey: "artifact_id",
});

Cart.belongsTo(User);

Cart.hasMany(Artifact, {
  foreignKey: "artifact_id",
});

module.exports = { User, Artifact, Post, Cart };
