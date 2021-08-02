const authorize = require("../utils/auth");
const router = require("express").Router();
const { Artifact, User } = require("../models");

router.get("/", async (req, res) => {
  try {
    console.log('Im working')
     const artifactData = await Artifact.findAll({
       include: [User],
       order: [["likes", "ASC"]],
     });
    
     const artifacts = artifactData.map((artifact) => artifact.get ({plain: true}));

    res.render("homepage", {
      artifacts,
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

router.get('/staff', (req,res) => {
  res.render('staff');
})
//might add a profile page???

module.exports = router;
