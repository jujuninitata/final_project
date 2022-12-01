const router = require("express").Router();
const {tambahProfile} = require("./../controllers/profilecontroller");
router.post("/tambahprofile", tambahProfile);

module.exports = router;