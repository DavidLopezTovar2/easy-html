const jwt = require("jsonwebtoken");
const secretKey = "caramelo";
//module.exports.secretKey = secretKey;

module.exports.authenticate = (req, res, next) => {

  jwt.verify(req.cookies.usertoken, secretKey, (err, payload) => {
  console.log("req.cookies.usertoken - JWT", req.cookies.usertoken)
    
    if (err) {
 
      res.status(401).json({ verified: false, err });

    } else {

      req.userId = payload._id
      next();

    }
  });
}