const express = require("express");
const app = express();
const port = 3000;

const interests = [
  {
    name: "programing",
    emoji: "💻",
    score: 80,
  },

  {
    name: "soccer",
    emoji: "⚽️",
    score: 30,
  },
];

app.get("/", (req, res) => {
  res.json(interests);
  //res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});