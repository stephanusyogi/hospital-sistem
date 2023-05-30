const auth = require("../controllers/authController");
const Router = require("express");

const router = Router();

router.post("/login", auth.login);

module.exports = router;
