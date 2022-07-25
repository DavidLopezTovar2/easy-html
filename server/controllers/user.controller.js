const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.register = (req, res) => {
  User.create(req.body.user)
    .then((newUser) =>
      res.json({ newUser, msg: "El usuario fue exitosamente registrado" })
    )
    .catch((err) =>
      res
        .status(500)
        .json({ error: err, msg: "No se pudo registrar el usuario" })
    );
};

module.exports.login = (req, res) => {
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (!user) {
        res.status(403).json({ msg: "invalid login attempt" });
      } else {
        bcrypt
          .compare(req.body.password, user.password)
          .then((passwordIsValid) => {
            if (passwordIsValid) {
              const secretKey = "caramelo";
              const payload = {
                _id: user._id,
              };
              const myJWT = jwt.sign(payload, secretKey);
              res
                .cookie("usertoken", myJWT, secretKey, { httpOnly: true })
                .json({ msg: "userToken creado", userId: payload._id });
            } else {
              res.status(403).json({ msg: "invalid login attempt" });
            }
          })
          .catch((err) => {
            res.status(403).json({ msg: "invalid login attempt" });
          });
      }
    })
    .catch((err) => res.json(err));
};

module.exports.logout = (_, res) => {
  try {
    return res.clearCookie("usertoken").json({ msg: "Token eliminado" });
  } catch (err) {
    return res.status(403).json({ msg: "Usuario sin token", err });
  }
};

module.exports.addCompany = (req, res) => {
  User.findByIdAndUpdate(
    req.params.id,
    {
      $push: { company: req.body.companyId },
    },
    { new: true }
  )
    .then((userUpdated) => res.json({ userUpdated }))
    .catch((err) =>
      res.status(500).json({
        msg: "Ups no hemos podido agregar esa compaía al usuario",
        error: err,
      })
    );
};

module.exports.getUser = (req, res) => {
  User.findById(req.params.id)
    .then((user) => res.json({ user }))
    .catch((err) =>
      res
        .status(404)
        .json({ error: err, msg: "Ups no hemos podido traerte el usuario" })
    );
};

module.exports.deleteCompanyFromUser = (req, res) => {
  User.findByIdAndUpdate(
    req.params.iduser,
    { $pull: { company: req.params.id } },
    { new: true }
  )
    .then((userUpdated) => res.json({ userUpdated }))
    .catch((err) =>
      res
        .status(500)
        .json({ msg: "Ups no hemos podido actualizar el usuario", err })
    );
};

module.exports.actualUser = (req,res) => {
    console.log(req.userId)
    res.json({ userId: req.userId})
}
