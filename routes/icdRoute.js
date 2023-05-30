const icd = require("../controllers/icdController");
const Router = require("express");
const protect = require("../middlewares/protect");

const router = Router();

// Get ICD-10
router.post("/icd-10", protect, icd.getICD10);

// Get ICD-9
router.post("/icd-9", protect, icd.getICD9);

module.exports = router;
