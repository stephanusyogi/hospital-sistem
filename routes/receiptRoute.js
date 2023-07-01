const Receipt = require("../controllers/receiptController");

const Router = require("express");
const protect = require("../middlewares/protect");

const router = Router();

router.get("/receipt", protect, Receipt.getReceipts);
router.post("/receipt", protect, Receipt.createReceipt);
router.put("/receipt/:id", protect, Receipt.updateReceipt);
router.get("/receipt-norm/:id", protect, Receipt.getReceiptByNoRM);
router.get("/receipt-id/:id", protect, Receipt.getReceiptByID);

module.exports = router;