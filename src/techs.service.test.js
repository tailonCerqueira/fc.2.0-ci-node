const techsService = require("./techs.service");

describe("TechsService", () => {
  test("Should be able to return a list of techs", () => {
    console.log(techsService.listOfTechs());
    expect(techsService.listOfTechs()).toEqual(["GO", "Kubernetes", "NODE"]);
  });
});
