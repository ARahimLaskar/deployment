const express = require("express");
require("dotenv").config();

const app = express();

app.get("/", (req, res) => {
  res.send({ msg: `home page ${process.env.NAME}` });
});

app.get("/blog", (req, res) => {
  res.send("blog page");
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`listening at port ${port}`);
});
