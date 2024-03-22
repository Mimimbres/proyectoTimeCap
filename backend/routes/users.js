const express = require("express");
const router = express.Router();
const isAuthenticated = require("../middlewares/isAuthenticated");
const prisma = require("../prisma");


router.get("/" ,async (req, res) => {
  const users = await prisma.user.findMany({
  });
  res.json({ message: "All users", users });
});



module.exports = router;
