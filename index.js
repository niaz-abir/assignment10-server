const express = require("express");
const app = express();
const cors = require("cors");
const port = 5000;

const course = require("./data/Course.json");
const courseinfo = require("./data/Courseinfo.json");

app.use(cors());
app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/course", (req, res) => {
  res.send(course);
});

app.get("/courseinfo/:id", (req, res) => {
  const id = req.params.id;
  const selectedcourse = courseinfo.find((n) => n.id === id);
  res.send(selectedcourse);
});

app.listen(port, () => {
  console.log(`Example app listening on port`, port);
});
