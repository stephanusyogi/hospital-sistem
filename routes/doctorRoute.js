const doctor = require("../controllers/doctorController");
const Router = require("express");
const protect = require("../middlewares/protect");

const router = Router();

// Add Nurse
router.post("/doctor", protect, doctor.createDoctor);
// Get All Nurse
router.get("/doctor", protect, doctor.getDoctor);
// Get Nurse By Id
router.get("/doctor/:id", protect, doctor.getDoctorById);
// Update Nurse
router.put("/doctor/:id", protect, doctor.updateDoctor);
// Update Nurse Password
router.put("/doctor/update-password/:id", protect, doctor.updatePasswordDoctor);
// Delete Nurse
router.delete("/doctor/:id", protect, doctor.deleteDoctor);

module.exports = router;
