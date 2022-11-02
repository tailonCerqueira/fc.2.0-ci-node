const techsService = require("./techs.service");

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  const techs = techsService.listOfTechs();
  res.send(techs);
});

app.listen(3000, () => {
  console.log("Starting application");
});
