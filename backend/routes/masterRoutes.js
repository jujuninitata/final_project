const router = require("express").Router();
const {tambahagama,tambahjabatan,tambahjeniscuti,tambahrole,tambahunitkerja} = require("../controllers/masterController");
router.post("/tambahagama", tambahagama);
router.post("/tambahjabatan", tambahjabatan);
router.post("/tambahjeniscuti", tambahjeniscuti);
router.post("/tambahrole", tambahrole);
router.post("/tambahunitkerja", tambahunitkerja);


module.exports = router;