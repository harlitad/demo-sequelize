const Forum = require("../models/forum");
const User = require("../models/user");

const router = require("express").Router();

router.get("/", async (req, res) => {
  try {
    const users = await User.findAll({include: Forum});
    
    // console.log(users)

    res.status(200).json({
      status: true,
      message: "get list of users",
      data: users,
    });
  } catch (error) {
    console.error(error);
  }
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  res.status(200).json({
    status: true,
    message: `get a user ${id}`,
    data: [],
  });
});

module.exports = router;
