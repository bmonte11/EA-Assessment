var path = require("path");
var express = require("express");

var app = express();

app.use("/static", express.static("Public"));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});

const PORT = 3000;

console.log("Starting express server on port: ", PORT);
app.listen(PORT);
