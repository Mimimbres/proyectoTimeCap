const express = require("express");
const router = express.Router();
const isAuthenticated = require("../middlewares/isAuthenticated");
const prisma = require("../prisma");

//route for creating a capsule.
router.post("/create", async (req, res) => {
  console.log(req.body)
  const {
    users,
    capsuleName,
    password,
    closeTime,
    songs = [],
    image = [],
    letter = [],
    isClosed = false,
  } = req.body;
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
        connect: usersArr,
      },
    },
  });
  res.json({ message: "capsule created" });
});

//route for seeing all user capsules.
router.get("/" ,async (req, res) => {
  const userCapsules = await prisma.capsule.findMany({
    include: {
      users: true,
    },
  });
  res.json({ message: "Your capsules:", userCapsules });
});
//route for seeing a capsule by id, needes password from req.body
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const { password } = req.body;
  const capsule = await prisma.capsule.findUnique({
    where: { id, password },
  });
  res.json({ message: "capsule:", capsule });
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

//route for deleting a capsule by id.
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  await prisma.capsule.delete({ where: { id } });
  res.json({ message: "capsule deleted" });
});

module.exports = router;
