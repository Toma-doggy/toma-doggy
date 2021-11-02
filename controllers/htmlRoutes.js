const router = require('express').Router()
const { Project, User } = require('../models')

router.get('/', async (req, res) => {
    try{
        const ProjData = await Project.findAll({
            include: [{
                model: User,
                attributes: ['name']
            }]
        })

        const proj = ProjData.map((project) => project.get({ plain:true }))

        res.render('homepage', {
            proj, logged_in: req.session.logged_in
        })
    }
    catch (err){
        res.status(500).json(err)
    }
})

router.get('/profile', async (req, res) => {
    if(!req.session.user_id){
        res.redirect('/')
    }
    try{
        const userInfo = await User.findByPk(req.session.user_id, {
            attributes: {exclude: ['password']},
            include: [Project]
        })
        const user = await userInfo.get({ plain: true })

        res.render('profile', {
            ...user, logged_in: true
        })
    } catch (err) {
        console.log(err);
        res.status(418).json(err)
    }
})

router.get('/project/:id', async (req, res) => {
    try{
        const projData = await Project.findByPk(req.params.id, {
            include: [
                {model:User,
                attributes: ['name']}
            ]
        })
        const project = projData.get({ plain: true })

        res.render('project', {
            ...project, logged_in: req.session.logged_in
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
})

router.get('/login', (req, res) => {
    if(req.session.logged_in){
        res.redirect('/profile')
    }
    res.render('login')
})
module.exports = router