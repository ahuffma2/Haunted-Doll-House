const router = require("express").Router();
const Artifact = require("../../models/Artifact");

router.post('/' , (req,res) => {
    
})

router.get('/', (req,res) => {
    try{

    } catch (err) { res.status(500).json(err); }

});

router.get('/:id' , (req,res) => {

})

module.exports = router;