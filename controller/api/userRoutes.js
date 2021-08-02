const router = require("express").Router();
const bcrypt = require("bcrypt");
const User = require("../../models/User");

// CREATE a new user
router.post("/", async (req, res) => {
  try {

    //CHECKS TO SEE IF A USERNAME IS TAKEN
    const checkUser = await User.findOne({where: {username: req.body.username}})

      if(checkUser){
          res.status(400).json({message: 'Username Taken'});
          return;
    }

    const userData = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.username = userData.username;
      req.session.logged_in = true;
      res.status(200).json(userData);
    });
   
  } catch (err) {
    res.status(400).json(err);
  }
});

// GET one user
router.get("/:id", async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id);
    if (!userData) {
      res.status(404).json({ message: "No user with this id!" });
      return;
    }
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/login', async (req,res) => {
  try{
    const user = await User.findOne({where: {username: req.body.username}})
    if(!user){
      res.status(400).json({message: "Invalid Username or Password"});
      return;
    }

    //checks against hashed password
    const usablePassword = await user.checkPassword(req.body.password);
    if(!usablePassword){
        res.status(400).json({message: 'Invalid Username or Password'});
        return;
    }

    req.session.save(() => {
        req.session.u_id = user.id;
        req.session.username = user.username;
        req.session.logged_in = true;

        res.json({user: user, message: 'Logged In'});
    });

  }
  catch (err) { res.status(400).json(err) }
});

router.post('/logout', async (req,res) => {
  if(req.session.logged_in) {
      req.session.destroy(() => {
          res.status(204).end();
      });
  } 
  else { res.status(404).end() }
});


module.exports = router;
