const nurse = require("../controllers/nurseController");
const Router = require("express");
const protect = require("../middlewares/protect");

const router = Router();

// Add Nurse
router.post("/nurse", protect, nurse.createNurse);
// Get All Nurse
router.get("/nurse", protect, nurse.getNurse);
// Get Nurse By Id
router.get("/nurse/:id", protect, nurse.getNurseById);
// Get Nurse By No RM
router.get("/nurse-norm/:id", protect, nurse.getNurseByNoRM);
// Update Nurse
router.put("/nurse/:id", protect, nurse.updateNurse);
// Update Nurse Password
router.put("/nurse/update-password/:id", protect, nurse.updatePasswordNurse);
// Delete Nurse
router.delete("/nurse/:id", protect, nurse.deleteNurse);

module.exports = router;
