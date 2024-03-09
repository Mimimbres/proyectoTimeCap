const express = require("express");
const router = express.Router();
const isAuthenticated = require("../middlewares/isAuthenticated");
const prisma = require("../prisma");

//route for creating a capsule.
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

//route for seeing all user capsules.
router.get("/", isAuthenticated, async (req, res) => {
  const userId = req.user.id;
  const userCapsules = await prisma.capsule.findMany({
    where: {
      users: {
        some: {
          id: userId,
        },
      },
    },
  });
  res.json({ message: "Your capsules:", userCapsules });
});

//route for updating a capsule by id.
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { songs, image, letter } = req.body;
  await prisma.capsule.update({
    where: { id },
    data: {
      songs,
      image,
      letter,
    },
  });
  res.json({ message: "capsule updated" });
});

module.exports = router;

