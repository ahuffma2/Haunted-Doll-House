const router = require("express").Router();


const userRoutes = require("./userRoutes");
const artifactRoutes = require('./artifactRoutes');
const commentRoute = require("./commentRoutes");

router.use("/users", userRoutes);
router.use("/artifacts", artifactRoutes);
router.use("/comment", commentRoute);

module.exports = router;
