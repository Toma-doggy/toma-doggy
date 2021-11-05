const {Dog, DogItem, Item, User, UserDog} = require('../../models');
const router = require('express').Router();
const userRoutes = require('./userRoutes');
const userdogRoutes = require('./userdogRoutes');
const dogRoutes = require('./dogRoutes')


router.use('/users', userRoutes);
router.use('/dogs', dogRoutes);
router.use('/userdogs', userdogRoutes);


module.exports = router;
