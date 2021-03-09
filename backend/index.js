const router = require('express').Router();
router.get('/', async(req, res) => {
        res.send('index page');
});

module.exports = router;