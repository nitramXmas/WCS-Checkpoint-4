const { Router } = require("express");
const { CountryController } = require("../controllers");

const countryRouter = Router();

countryRouter.get("", (req, res) => new CountryController(req, res).getAll());
countryRouter.get("/:id", (req, res) =>
  new CountryController(req, res).getById()
);

module.exports = countryRouter;
