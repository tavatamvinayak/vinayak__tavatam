const jwt = require("jsonwebtoken");

// // env access
require("dotenv").config();

const auth = async (req, res, next) => {
  try {
    let userID = req.headers["authorization"];

    if (!userID)
      throw new Error(
        " Authorization header not found " + req.headers["Authorization"]
      );
    const token = userID.split("Bearer ")[1];

    if (token) {
      let user = jwt.verify(token, process.env.TOKEN_SCRETE_KEY, {
        expiresIn: "1h",
      }); // // Token = user data
      // console.log(user + " verified");
    } else {
      return res
        .status(401)
        .json({ message: "unauthorized User OR middleware error" });
    }
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: "error User" });
  }
};

module.exports = auth;
