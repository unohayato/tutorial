const fs = require("fs");
fs.readFile("data1.txt", "utf-8", (err, data) => {
  if (err) throw err
  console.log(data);
});