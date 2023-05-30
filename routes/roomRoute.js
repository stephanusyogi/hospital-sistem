const room = require("../controllers/roomController");
const Router = require("express");
const protect = require("../middlewares/protect");

const router = Router();

// Add Room
router.post("/room", protect, room.createRoom);
// Get All Room
router.get("/room", protect, room.getRoom);
// Get Room By Id
router.get("/room/:id", protect, room.getRoomById);
// Update Room
router.put("/room/:id", protect, room.updateRoom);
// Delete Room
router.delete("/room/:id", protect, room.deleteRoom);

module.exports = router;
