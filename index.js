const express = require("express");
const path = require("path");

const app = express();

const members = [
  {
    id: 1,
    name: "Rex Smith",
    email: "rex@gmail.com",
    status: "active",
  },
  {
    id: 2,
    name: "Lisa Smith",
    email: "Lisa@gmail.com",
    status: "inactive",
  },
  {
    id: 3,
    name: "John Smith",
    email: "John@gmail.com",
    status: "active",
  },
];

app.get("/api/members", (req, res) => {});

// Static

app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server just started on port ${PORT}`));
