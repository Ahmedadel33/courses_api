const joi = require("joi");

const userRegister = joi.object({
  name: joi.string().required(),
  email: joi.string().email().required(),
  password: joi.string().min(6).required(),
});

const userLogin = joi.object({
  email: joi.string().email().required(),
  password: joi.string().min(6).required(),
});

module.exports = { userRegister, userLogin };