const admin = require("../controllers/adminController");
const Router = require("express");
const protect = require("../middlewares/protect");

const router = Router();

// Add Admin
router.post("/admin", protect, admin.createAdmin);
// Get All Admin
router.get("/admin", protect, admin.getAdmin);
// Get Admin By Id
router.get("/admin/:id", protect, admin.getAdminById);
// Update Admin
router.put("/admin/:id", protect, admin.updateAdmin);
// Update Admin Password
router.put("/admin/update-password/:id", protect, admin.updatePasswordAdmin);
// Delete Admin
router.delete("/admin/:id", protect, admin.deleteAdmin);

module.exports = router;
