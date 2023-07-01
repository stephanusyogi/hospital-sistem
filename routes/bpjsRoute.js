const bpjs = require("../controllers/bpjsController");
const Router = require("express");
const protect = require("../middlewares/protect");

const router = Router();

// Get BPJS
router.get("/bpjs",protect, bpjs.getBpjs);

// Get BPJS By Id
router.get("/bpjs/:id",protect, bpjs.getBpjsById);

router.get("/bpjs-norm/:id",protect, bpjs.getBpjsByNoRM);

module.exports = router;
