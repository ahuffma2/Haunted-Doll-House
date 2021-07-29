const router = require('express').Router();

const userRoutes = require('./userRoutes');np
router.use('/users', userRoutes);

module.exports = router;