const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

module.exports.createUser = (req, res) => {
    console.log(req.body.user);
    User.create(req.body.user)
        .then(newUser => res.json({ newUser }))
        .catch(err => res.status(500).json({ error: err, msg: 'Ups havent been able to create the user' }));
}