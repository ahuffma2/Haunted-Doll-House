const router = require('express').Router();
const auth = require('../../utils/auth');
const {Comment} = require('../../models/Comment');

router.post('/', async (req,res) => {
    try{ 
        const commentData = await Comment.create({
            content: req.body,
            userId: req.session.userId
        });
        res.json(commentData);
    } catch (err) { res.status(500).json(err); }
})

module.exports = router;