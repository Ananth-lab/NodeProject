const jwt = require("jsonwebtoken");

const User = require("../models/client");

exports.authenticate = async (req, res, next) => {
  try {
    const token = req.header("Authorization");
    const user = jwt.verify(token, process.env.AUTH_SECRET_KEY);
    User.findOne({ _id: user.userid })
      .then((user) => {
        req.user = user;
        next();
      })
      .catch((error) => {
        throw new Error(error);
      });
  } catch (error) {
    console.log(error);
    return res
      .status(401)
      .json({ success: false, message: "User is not authorized" });
  }
};
