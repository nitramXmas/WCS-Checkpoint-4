const { Router } = require("express");
const { TeamController } = require("../controllers");

const teamRouter = Router();

teamRouter.get("", (req, res) => new TeamController(req, res).getAll());
teamRouter.get("/:id", (req, res) => new TeamController(req, res).getById());
module.exports = teamRouter;
