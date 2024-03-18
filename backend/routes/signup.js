const express = require("express");
const router = express.Router();

// // env access
require("dotenv").config();

// // bcrypt password
const bcrypt = require("bcryptjs");

/// Jwt
const jwt = require("jsonwebtoken");

// /// Schema
const Users = require("../models/User");

// // express validation
const { body, validationResult } = require("express-validator");
const { SIGNUP_ExpressValidation } = require("./../validators/validation");

router.post("/", SIGNUP_ExpressValidation, async (req, res) => {
  // express validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { Email, Password } = req.body;

  const SignUp = new Users();
  SignUp.Email = Email;

  try {
    const salt = bcrypt.genSaltSync(10);
    const hash_Password = bcrypt.hashSync(Password, salt); // // password encrypt

    // console.log("🚀 bcryptJS_password:", hash_Password);

    SignUp.Password = hash_Password;

    // /// Find a Email Already signup Check ( Already exist Or Not)
    const FindEmail = await Users.findOne({ Email: Email });
    // console.log(`Find Email ${FindEmail}`);

    // // user Already Created & Existed then user directly login
    const Compare_Password = bcrypt.compareSync(Password, FindEmail.Password);
    if (Compare_Password) {
      console.log("Login success & password is corrected");

      // // JWT
      const Token = jwt.sign(
        { Email: FindEmail.Email, id: FindEmail._id },
        process.env.TOKEN_SCRETE_KEY,
        { expiresIn: "1d" }
      );
      // console.log(Token);

      res
        .cookie("token", Token, {
          httpOnly: true,
          domain: `http://localhost:3000`,
          sameSite: "strict",
          secure: true,
          expires: new Date(Date.now() + 8 * 3600000),
        })
        .json({
          success: true,
          message: "user Already Created & existed then  user directly login",
          user: { Email: FindEmail.Email },
          Token,
        })
        .status(200)
        .end();
    } else {
      // console.log("Email & Password invalid");
      res
        .json({ success: false, errors: "Email &  Password invalid" })
        .status(401);
    }
  } catch (error) {
    console.error(error);
    res.send("something wrong");
  }
});

module.exports = router;
