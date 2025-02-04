const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const joi = require("joi");
const passwordComplexity = require("joi-password-complexity");
const Joi = require("joi");

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

// return jwt token for specified user
userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
  return token;
};

// user model
const User = mongoose.model("user", userSchema);


//
const validate = (data) => {
    const schema = Joi.object({
        firstName:Joi.string().required().label("First Name"),
        lasttName:Joi.string().required().label("Last Name"),
        email: Joi.string().email().required().label("Email"),
        password:passwordComplexity().required().label("Password")
    })
    return schema.validate(data)
}

module.exports = {User,validate}