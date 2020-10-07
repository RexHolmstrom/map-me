const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");
const logger = require("./middlewares/logger");

const app = express();

// app.use(logger);

//Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
//body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Route to homepage

app.get("/", function (req, res) {
  res.render("index");
});

// Static
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/members", require("./routes/api/members"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server just started on port ${PORT}`));
