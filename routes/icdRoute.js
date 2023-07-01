const icd = require("../controllers/icdController");
const Router = require("express");
const protect = require("../middlewares/protect");
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });

const router = Router();

// Get ICD-10
router.post("/icd-10", [upload.single("file"), protect], icd.getICD10);

// Get ICD-9
router.post("/icd-9", [upload.single("file"),protect], icd.getICD9);

module.exports = router;
