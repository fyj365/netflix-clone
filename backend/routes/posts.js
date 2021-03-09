const router = require('express').Router();
const verify = require('./verifyToken');
router.get('/posts', verify, async(req, res) => {
        res.send(req.user);
    // res.json({
    //     posts: {
    //         user: User.findOne({_id: req._id}),
    //         title: 'my first post',
    //         description: 'random data you shouldnt access'
    //     }
    // })
});

module.exports = router;