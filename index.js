const techsService = require("./src/techs.service");

const express = require("express");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  const techs = techsService.listOfTechs();
  res.send(techs);
});

app.post("/", (req, res) => {
  // const tec = req.body;
  const tec = req.query.tecs;
  const techs = techsService.pushTechs(tec);
  res.send(techs);
});

app.listen(3000, () => {
  console.log("Starting application");
});
