const jwt = require("jsonwebtoken");
const secretKey = "caramelo";
//module.exports.secretKey = secretKey;

module.exports.authenticate = (req, res, next) => {

  jwt.verify(req.cookies.usertoken, secretKey, (err, payload) => {

    console.log("🚀 ~ file: jwt.config.js ~ line 20 ~ jwt.verify ~ usertoken", req)
    if (err) {
 
      res.status(401).json({ verified: false });

    } else {

      req.userId = payload._id
      next();

    }
  });
}
