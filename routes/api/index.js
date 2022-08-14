const router = require('express').Router();
const userRoutes = require('./UserRoute');
const thoughtRoutes = require('./ThoughtRoute');

router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

module.exports = router;