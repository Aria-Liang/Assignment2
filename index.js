const express = require("express");
const fs = require("fs");
const https = require("https");
const path = require("path");

const app = express();

app.get("/Aria/19775", (req, res) => {
  res.send("Hello, HTTPS world!");
});

const httpsOptions = {
  key: fs.readFileSync(path.resolve(__dirname, "server.key")),
  cert: fs.readFileSync(path.resolve(__dirname, "server.cert")),
};

https.createServer(httpsOptions, app).listen(3000, () => {
  console.log("HTTPS server running on port 3000");
});
