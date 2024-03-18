// // express validation 
const { body ,  validationResult  } = require("express-validator");



const SIGNUP_ExpressValidation = [
    body('Email' , 'Enter a valid Email').isEmail(),
    body('Password' , 'Password must be atleast 8 character').isLength({min:8}),
]



module.exports = {SIGNUP_ExpressValidation }