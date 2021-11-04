const router = require('express').Router();
const userRoutes = require('./userRoutes');
const userdogRoutes = require('./userdogRoutes')


router.use('/users', userRoutes);

router.use('/userdogs', userdogRoutes);


module.exports = router;
