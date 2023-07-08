const patient = require("../controllers/patientController");
const Router = require("express");
const protect = require("../middlewares/protect");

const router = Router();

// Add Patient
router.post("/patient", protect, patient.createPatient);
// Get All Patient
router.get("/patient", protect, patient.getPatient);
// Get Patient By Id
router.get("/patient/:id", protect, patient.getPatientById);
router.get("/patient-norm/:id", protect, patient.getPatientByNoRM);
// Update Patient
router.put("/patient/:id", protect, patient.updatePatient);
// Delete Patient
router.delete("/patient/:id", protect, patient.deletePatient);

router.get("/check-patient/:id", protect, patient.checkPatient);

module.exports = router;
