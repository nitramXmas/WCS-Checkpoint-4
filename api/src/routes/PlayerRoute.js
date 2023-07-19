const { Router } = require("express");
const { PlayerController } = require("../controllers");

const playerRouter = Router();

playerRouter.get("", (req, res) => new PlayerController(req, res).getAll());
playerRouter.get("/:id", (req, res) =>
  new PlayerController(req, res).getById()
);

module.exports = playerRouter;
