const router = require("express").Router();
const userRoutes = require("./users");

router.get("/", (req, res) => {
  res.status(200).json({
    status: true,
    message: "get list of users",
    data: [],
  });
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
