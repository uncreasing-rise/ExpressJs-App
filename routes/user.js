const express = require("express");
const protect = require("../middlewares/auth");
const roleCheck = require("../middlewares/roleCheck");

const router = express.Router();

router.use(protect, roleCheck(["user", "admin"]));

router.get("/data", (req, res) => {
  res.json({ message: "User data" });
});

module.exports = router;
