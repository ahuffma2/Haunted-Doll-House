//TABLE OF CONTENTS
//--HOME--
//--LOGIN--
//--SIGNUP--
//--STAFF--
//--INDIVIDUAL ARTIFACT--
//--POST CREATION--

const authorize = require("../utils/auth");
const router = require("express").Router();
const { Artifact, User } = require("../models");

//HOME
router.get("/", async (req, res) => {
  try {
     const artifactData = await Artifact.findAll({
       include: [{model: User}],
       order: [["likes", "ASC"]],
     });
    
     const artifacts = artifactData.map((artifact) => artifact.get ({plain: true}));

    res.render("homepage", {
      artifacts,  
      logged_in: req.session.logged_in,
      username: req.session.username,
    });

  } catch (err) { res.status(500).json(err);  }
});

//LOGIN
router.get("/login", async (req, res) => {
  try {
    if (req.session.logged_in) {
      res.redirect("/");
      return;
    }
    res.render("login");
  } catch (err) { res.status(500).json(err);}
});

//SIGNUP
router.get('/signup', (req,res) => {
  if(req.session.logged_in) {
    res.redirect('/');
    return;
}
res.render('signup');
})


//STAFF PAGE
router.get('/staff', async (req,res) => {
  try{
  res.render('staff');
  } catch (err) { res.status(500).json(err);}
})


//INDIVIDUAL ARTIFACT
router.get('/artifact/:id', authorize, async (req,res) => {
  try{

    // const artifactData = await Artifact.findByPk(req.params.id, 
    // {
    //   include: [User,Comment]
    // });
    // const artifact = artifactData.map((artifact) => artifact.get ({plain: true}));

    res.render('artifact');
  } catch (err) { res.status(500).json(err);}

})


//POST CREATION PAGE
router.get('/post-create', authorize, async (req,res) => {
  try{
      res.render('post-create' ,{
      logged_in: req.session.logged_in,
    })
    } catch (err) { res.status(500).json(err);}
  

})
module.exports = router;
