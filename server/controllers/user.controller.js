const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

// module.exports.register = (req, res) => {

//     const user = new User(req.body);

//     user
//         .save()
//         .then(() => {
//             res.json({ msg: "El usuario fue exitosamente registrado" });
//         })
//         .catch(err => res.status(500).json({ error: err, msg: "No se pudo registrar el usuario" }));
        
// };

module.exports.register = (req, res) => {
    console.log(req.body.user);
    User.create(req.body.user)
        .then(newUser => res.json({ newUser, msg: "El usuario fue exitosamente registrado" }))
        .catch(err => res.status(500).json({ error: err, msg: 'No se pudo registrar el usuario' }));
}