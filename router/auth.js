const router = require('express').Router();
const User = require('../Model/User')


router.post('/register', (req, res) => {
    const user = new User({
        name : req.body.name,
        email: req.body.email,
        password :req.body.password,
        phone: req.body.phone,
        adresse : req.body.adresse,
    });
    user.save()
    .then(newUser => {
        if(!newUser){
            res.status(404).send({message :"errr"});
        }
        res.status(200).send(newUser);
    }).catch(err => {
        res.send(err.message);
    });
        
}) ;

module.exports= router;