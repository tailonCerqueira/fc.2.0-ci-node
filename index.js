const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("OK");
});

app.listen(3000, () => {
  console.log("Starting application");
});

// uses: usar action
// run: rodar comando
