const router = require("express").Router();
const Artifact = require("../../models/Artifact");

router.post('/', async (req,res) => {
    try {
        const newArtifact = await Artifact.create({
            ...req.body,
            userId: req.session.userId});
        res.json(newArtifact);
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