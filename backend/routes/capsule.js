const express = require("express");
const router = express.Router();
const isAuthenticated = require("../middlewares/isAuthenticated");
const prisma = require("../prisma");

router.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

router.post("/create", async (req, res) => {
const {users, capsuleName, password, closeTime, songs=[], image = [], letter=[], isClosed = false}=req.body;
console.log(users); 
await prisma.capsule.create({
  data: {
    capsuleName,
    password,
    closeTime: Date.parse(closeTime),
    songs,
    image,
    letter,
    isClosed,
    users: {
      connect:users.map((user)=>({email:user.email}))
    },
  },
});
res.json({message:"capsule created"});

});

module.exports = router;
