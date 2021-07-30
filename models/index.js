const User = require("./User");
const Artifact = require("./Artifact");
const Post = require("./Post");

//relations go here
<<<<<<< HEAD

module.exports = { User, Artifact, Post };
=======
User.hasMany(Post);
module.exports = {User,Artifact,Post};
>>>>>>> 5d43a29269a7ed7c176cf7175db2bd875947ec20
