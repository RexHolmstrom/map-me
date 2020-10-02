const express = require("express");
const path = require("path");
const logger = require("./middlewares/logger");
const members = require("./Members");

const app = express();

// app.use(logger);

// Static

app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server just started on port ${PORT}`));
