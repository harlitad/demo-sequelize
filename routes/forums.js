const router = require("express").Router();

router.get("/", (req, res) => {
  res.status(200).json({
    status: true,
    message: "get list of forums",
    data: [],
  });
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
