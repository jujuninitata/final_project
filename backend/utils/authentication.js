const jwt = require("jsonwebtoken");
const db = require("./../models");
const autorize = async (req, res, next) => {
    try {
        const bearerToken = req.headers.authorization;
        const token = bearerToken.split(" ")[1];
        const isiDataToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        console.log(isiDataToken)
        await db.user.findByPk(isiDataToken.id)
        next();
    } catch(err){
        res.status(402).json({ message: "Authorization Failed!"});
    }
}

module.exports = { autorize };