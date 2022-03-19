const router = require("express").Router();
const User = require("../model/user")
const bcrypt = require('bcryptjs');

const {registerValidation,loginValidation} = require("../validation");
const { findOne } = require("../model/user");


router.get("/", (req, res) => {
    res.send("Register Page")
})

router.post("/register", async (req,res)=>{


    //! Lets validate the user data using hapi
    const {error} =  registerValidation(req.body);

    if (error) return res.status(400).json({
        "state": false,
        "msg": error.details[0].message
    });

    //! checking the user email already exist or not
    const emailExist = await User.findOne({ email: req.body.email })
    if(emailExist) return res.status(400).send("Email already exists...")


    //! salt means adding  extra string with hash [ hash + salt]
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password:hashedPassword,
    })

    try {
        const savedUser = await user.save();
        res.status(200).json({
            userID:savedUser._id
        })
    } catch (err){
        res.status(400).jsonp({
            status: "Failed",
            msg:err
        })
    }
})

// ? Login

router.post("/login", async (req, res) => {


    //* Lets validate the user data
    const { error } = loginValidation(req.body);
    if (error) return res.status(400).json({ msg: error.details[0].message });

    //*  Lets check the user is exists or not
    const loginUser = await User.findOne({ email: req.body.email })
    if (!loginUser) return res.status(401).json({
        msg:"Sorry! ,Email not exists"
    })

    const { email, password } = await User.findOne({ email: req.body.email });
    console.log(email)
    console.log(password)
    res.send(req.body)


})


module.exports = router;
