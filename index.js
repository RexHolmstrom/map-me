const express = require("express");
const path = require("path");
const moment = require("moment");
const members = require("./Members");

const app = express();

const logger = (req, res, next) => {
  console.log(
    `${req.protocol}://${req.get("host")}${
      req.originalUrl
    }: ${moment().format()}`
  );
  next();
};

app.use(logger);

app.get("/api/members", (req, res) => res.json(members));

// Static

app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server just started on port ${PORT}`));
