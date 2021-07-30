const User = require("./User");
const Artifact = require("./Artifact");
const Post = require("./Post");

//relations go here
User.hasMany(Post);
module.exports = { User, Artifact, Post };
