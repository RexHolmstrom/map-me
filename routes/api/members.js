const express = require("express");
const router = express.Router();
const members = require("../../Members");

router.get("/", (req, res) => res.json(members));

//Single

router.get("/:id", (req, res) => {
  const found = members.some((member) => member.id === parseInt(req.params.id));

  if (found) {
    res.json(members.filter((member) => member.id === parseInt(req.params.id)));
  } else {
    res
      .status(400)
      .json({ msg: `No member found with the id of ${req.params.id}` });
  }
});

//Creating
router.post("/", (req, res) => {
  res.send(req.send);
});

module.exports = router;
