const router = require('express').Router();
const User = require('../Model/User');
const { validateRegister, validateLogin } = require('./validation');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.get('/', async(req, res) => {
    res.send('index page');
});

router.post('/register', async (req, res) => {

    //LETS VALIDATE THE DATA BEFORE WE MAKE A USER
    const { error } = validateRegister(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    //Check if the user is already in the db
    const emailExist = await User.findOne({email: req.body.email});
    if (emailExist) return res.status(400).send('Email exists!');

    //hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
    });
    try{
        const saveUser = await user.save();
        res.send(saveUser);
    }catch (err) {
        res.status(400).send(err);
    }
});
router.post('/login', async (req, res) => {
     //LETS VALIDATE THE DATA BEFORE WE FIND A USER
     const { error } = validateLogin(req.body);
     if (error) return res.status(401).send(error.details[0].message);

     const user = await User.findOne({email: req.body.email});
     if (!user) return res.status(400).send('email not found');

     const isValidPassword = await bcrypt.compare(req.body.password, user.password);
     if (!isValidPassword) return res.status(204).send('password is wrong');
    //create and assign a token
    const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET);
    res.header('auth-token', token);
    res.status(200).send('logged in!');

});
module.exports = router;
