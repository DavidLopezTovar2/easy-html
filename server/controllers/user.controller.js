const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

module.exports.register = (req, res) => {

    User.create(req.body.user)
        .then(newUser => res.json({ newUser, msg: "El usuario fue exitosamente registrado" }))
        .catch(err => res.status(500).json({ error: err, msg: 'No se pudo registrar el usuario' }));

}

module.exports.login = (req, res) => {
    User.findOne({ email: req.body.email })
        .then(user => {
            if (!user) {
                res.status(403).json({ msg: "invalid login attempt" });
            } else {
                bcrypt
                    .compare(req.body.password, user.password)
                    .then(passwordIsValid => {
                        if (passwordIsValid) {
                            const secretKey = "caramelo";
                            const payload = {
                                _id: user._id
                            };
                            const myJWT = jwt.sign(payload, secretKey);
                            res.cookie("usertoken", myJWT, secretKey, { httpOnly: true }).json({ msg: "userToken creado", id: payload._id });

                        } else {
                            res.status(403).json({ msg: "invalid login attempt" });
                        }
                    })
                    .catch(err => {
                        res.status(403).json({ msg: "invalid login attempt" })
                    });
            }
        })
        .catch(err => res.json(err));
};
