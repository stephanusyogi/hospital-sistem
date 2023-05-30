const drug = require("../controllers/drugController");
const Router = require("express");
const protect = require("../middlewares/protect");

const router = Router();

// Add Drug
router.post("/drug", protect, drug.createDrug);
// Get All Drug
router.get("/drug", protect, drug.getDrug);
// Get Drug By Id
router.get("/drug/:id", protect, drug.getDrugById);
// Update Drug
router.put("/drug/:id", protect, drug.updateDrug);
// Delete Drug
router.delete("/drug/:id", protect, drug.deleteDrug);

module.exports = router;
