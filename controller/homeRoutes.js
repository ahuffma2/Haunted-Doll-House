const authorize = require("../utils/auth");
const router = require("express").Router();
const { Artifact, User } = require("../models");

router.get("/", async (req, res) => {
  try {
     const postData = await Post.findAll({
       attributes: ['user','likes','dislikes','artifact_id'],
       include: [{model: User}],
       order: [["likes", "ASC"]],
     });

     const posts = postData.map((post) => post.get ({plain: true}));

    res.render("homepage", {
      posts,
      logged_in: req.session.logged_in, //initialized logged_in
    });

  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", async (req, res) => {
  try {
    if (req.session.logged_in) {
      res.redirect("/");
      return;
    }
    res.render("login");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/signup', (req,res) => {
  if(req.session.logged_in) {
    res.redirect('/');
    return;
}
res.render('signup');
})


//might add a profile page???

module.exports = router;
