const express = require("express");
const router = express.Router();

app.get("/api/members", (req, res) => res.json(members));

//Single

app.get("/api/members/:id", (req, res) => {
  const found = members.some((member) => member.id === parseInt(req.params.id));

  if (found) {
    res.json(members.filter((member) => member.id === parseInt(req.params.id)));
  } else {
    res
      .status(400)
      .json({ msg: `No member found with the id of ${req.params.id}` });
  }
});
