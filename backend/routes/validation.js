//VALIDATION
const Joi = require('joi');

const validateRegister = (data) => {
    const rules = {
        name: Joi.string().min(6).required(),
        email: Joi.string().min(6).email().required(),
        password: Joi.string().min(6).required()
    }
    const schema =  Joi.object(rules);
    return schema.validate(data);
}
const validateLogin = (data) => {
    const rules = {
        name: Joi.string().min(6),
        email: Joi.string().min(6).email().required(),
        password: Joi.string().min(6).required()
    }
    const schema =  Joi.object(rules);
    return schema.validate(data);
}
module.exports.validateRegister = validateRegister;
module.exports.validateLogin = validateLogin;