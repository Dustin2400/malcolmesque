const router = require('express').Router();
const storyRoutes = require('./story-routes.js');
const userRoutes = require('./user-routes.js');

router.use('/stories', storyRoutes);
router.use('/users', userRoutes);

module.exports = router;