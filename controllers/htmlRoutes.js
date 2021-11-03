const router = require('express').Router()
const { User } = require('../models')

router.get('/', async (req, res) => {
    try{
        res.render('homepage', {
             logged_in: req.session.logged_in,
             style: "style.css"
        })
    }
    catch (err){
        res.status(500).json(err)
    }
})
router.get('/signup', async (req, res) => {
    try{
        res.render('signup', {
             logged_in: req.session.logged_in,
             style: "style.css"
        })
    }
    catch (err){
        res.status(500).json(err)
    }
})

router.get('/dogroom', async (req, res) => {
    try{
        res.render('dogroom', {
             logged_in: req.session.logged_in,
             style: "style.css"
        })
    }
    catch (err){
        res.status(500).json(err)
    }
})

router.get('/adoption', async (req, res) => {
    try{
        res.render('adoption', {
             logged_in: req.session.logged_in,
             style: "adoption.css"
        })
    }
    catch (err){
        res.status(500).json(err)
    }
})


module.exports = router