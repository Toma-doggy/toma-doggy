const router = require('express').Router()
const { User, UserDog } = require('../models')

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
    if(req.session.logged_in){
        res.redirect('/dogroom');
        }
})

router.get('/dogroom', async (req, res) => {
    try{
        const userData = await User.findByPk(req.session.user_id, {
            include: [UserDog]
        })
        const user = await userData.get({ plain: true })

        res.render('dogroom', {
            ...user,
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
    // if(req.session.logged_in){
    //     res.redirect('/dogroom');
    //     }
})


module.exports = router