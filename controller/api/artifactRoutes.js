const router = require("express").Router();
const Artifact = require("../../models/Artifact");

router.post('/', (req,res) => {
    const artifactData = req.body;
    
    try {
        //const newPost 
    }catch (err) { res.status(500).json(err); }
});

router.get('/', (req,res) => {
    try{

    } catch (err) { res.status(500).json(err); }

});

router.get('/:id' , (req,res) => {
    try{

    } catch (err) { res.status(500).json(err); }

})

module.exports = router;