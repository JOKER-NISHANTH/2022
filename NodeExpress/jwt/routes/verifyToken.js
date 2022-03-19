const JWT = require("jsonwebtoken");

module.exports = function (req,res,next) {
    const token = req.header('auth-token');
    if (!token) return res.status(403).json({ msg: "Access Denied", });

    try {
        const verified = JWT.verify(token, process.env.TOKEN_SECRET);
        req.userID = verified;

        next();
    } catch (error) {
        res.status(400).json({ "msg": "Invalid User" });
    }

}