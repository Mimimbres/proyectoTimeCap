const express = require("express");
const router = express.Router();
const isAuthenticated = require("../middlewares/isAuthenticated");
const prisma = require("../prisma");

router.post('/create', async (req, res) => {
  const { users, capsuleName, password, closeTime, songs = [], image = [], letter = [], isClosed = false } = req.body;
  const usersArr = users.map((user) => ({ username: user }));
  await prisma.capsule.create({
    data: {
      capsuleName,
      password,
      closeTime,
      songs,
      image,
      letter,
      isClosed,
      users: {
        connect: usersArr
      },
    },
  });
  res.json({ message: "capsule created" });
});

router.get("/", async (req, res) => {
  const userCapsules = await prisma.capsule.findMany({
    where: {
      users: {
        some: {
          id: "c751af07-9e2e-43ca-b6ce-28bf45380b76",
        },
      },
    },
  });
  res.json({ message: "Your capsules:", userCapsules });
});

module.exports = router;
