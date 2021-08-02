const router = require("express").Router();
const { User } = require("../../models");
const Artifact = require("../../models/Artifact");

router.post('/', async (req,res) => {
    try {
        const newArtifact = await Artifact.create({
            ...req.body,
            userId: req.session.u_id})
        res.json(newArtifact);
    }catch (err) { res.status(500).json(err); }
});

router.get('/', async (req,res) => {
    try{
        const artifactData = await Artifact.findAll({
            include: [{ model: User }],
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