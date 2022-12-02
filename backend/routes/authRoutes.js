const router = require("express").Router();
const {register, login, getuser} = require("./../controllers/authenticationController");
// const {verifyToken} = require( "../middleware/VerifyToken");
const { autorize } = require("./../utils/authentication");


router.post("/register", register);
router.post("/login", login)
router.get("/",autorize,getuser)
// router.post("/tambahprofile", tambahprofile)

module.exports = router;