const Joi = require("@hapi/joi");

const registerValidation = (data) => {

    const schema = Joi.object({
        name: Joi.string().min(6).max(30).required(),
        email: Joi.string().min(6).max(50).required().email(),
        password: Joi.string().min(6).max(255).required(),
    });

    return schema.validate(data);
};


const loginValidation = (data) => {

    const schema = Joi.object({

        email: Joi.string().min(6).max(50).required().email(),
        password: Joi.string().min(6).max(255).required(),
    });

    return schema.validate(data);
};



// const validateResult = schema.validate(req.body);

// const msg = validateResult.error.details[0].message;
// res.send(msg);

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
