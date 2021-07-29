const authorize = require ('../utils/auth');
const router = require('express').Router();
const { Artifact, User} = require ('../models');

router.get('/', async (req,res) => {
    try{

        const artifactData = await Artifact.findAll({
            attributes: { exclude: ['comments','users']},
              order: [['score','ASC']],
        });

        const artifacts = 
        res.render('homepage', {
            //artifacts serialized
            logged_in: req.session.logged_in, //initialized logged_in
        }); 
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', async (req, res) => {
    try{
        if(req.session.logged_in) {
            res.redirect('/');
            return;
        }
        res.render('login');
    } catch(err) 
    { res.status(500).json(err)}
})
