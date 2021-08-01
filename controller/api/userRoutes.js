const router = require("express").Router();
const bcrypt = require("bcrypt");
const User = require("../../models/User");

// CREATE a new user
router.post("/", async (req, res) => {
  try {
    const userData = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    res.status(200).json(userData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// fidning the credted user and logging in
// router.post("/login", async (req, res) => {
//   try {
//     // Searching database for user by their email
//     const userData = await User.findOne({ where: { email: req.body.email } });
//     if (!userData) {
//       // error msg if coulnd't email
//       res.status(404).json({ message: "Login failed. Please try again!" });
//       return;
//     }
//     // using bcrypt to comparing the provided pass
//     const validPassword = await bcrypt.compare(
//       req.body.password,
//       userData.password
//     );
//     // error if they donot match
//     if (!validPassword) {
//       res.status(400).json({ message: "Login failed. Please try again!" });
//       return;
//     }
//     // success if they do match
//     res.status(200).json({ message: "You are now logged in!" });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

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

module.exports = router;
