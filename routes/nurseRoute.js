const nurse = require("../controllers/nurseController");
const Router = require("express");

const router = Router();

// Login Nurse
router.post("/login-nurse", nurse.loginNurse);
// Logout Nurse
router.post("/logout-nurse", nurse.logoutNurse);
// Add Nurse
router.post("/nurse", nurse.createNurse);
// Get All Nurse
router.get("/nurse", nurse.getNurse);
// Get Nurse By Id
router.get("/nurse:id", nurse.getNurseById);
// Update Nurse
router.put("/nurse/:id", nurse.updateNurse);
// Update Nurse Password
router.put("/nurse/update-password/:id", nurse.updatePasswordNurse);
// Delete Nurse
router.post("/nurse/delete/:id", nurse.deleteNurse);

module.exports = router;
