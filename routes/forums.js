const Forum = require("../models/forum");

const router = require("express").Router();

router.get("/", async (req, res) => {
  try {
    const forums = await Forum.findAll()
    res.status(200).json({
      status: true,
      message: "get list of forums",
      data: forums,
    });
  } catch (error) {
    console.error(error)
  }
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  res.status(200).json({
    status: true,
    message: `get a forum ${id}`,
    data: [],
  });
});

module.exports = router;
