const express = require("express");
const path = require("path");
const logger = require("./middlewares/logger");

const app = express();

// app.use(logger);

// Static

app.use(express.static(path.join(__dirname, "public")));

app.use("routes/api/members", require("./routes/api/members"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server just started on port ${PORT}`));
