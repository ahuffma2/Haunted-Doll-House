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

router.get('/', async (req,res) => {
    try{
        const artifactData = await Artifact.findAll({
            include: [User],
            order: [["likes", "ASC"]],
          });
         
          const artifacts = artifactData.map((artifact) => artifact.get ({plain: true}));
          res.json(artifacts);

    } catch (err) { res.status(500).json(err); }

});

router.get('/:id' , (req,res) => {
    try{

    } catch (err) { res.status(500).json(err); }

})

module.exports = router;