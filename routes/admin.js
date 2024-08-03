const express = require("express");
const protect = require("../middlewares/auth");
const roleCheck = require("../middlewares/roleCheck");

const router = express.Router();

router.use(protect, roleCheck(["admin"]));

router.get("/data", (req, res) => {
  res.json({ message: "Admin data" });
});

module.exports = router;
