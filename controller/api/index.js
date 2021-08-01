const router = require("express").Router();

const userRoutes = require("./userRoutes");
const artifactRoutes = require('./artifactRoutes');

router.use("/users", userRoutes);
router.use("/artifacts", artifactRoutes);

module.exports = router;
