const { Router } = require("express");
const { PlayerController } = require("../controllers");

const playerRouter = Router();

playerRouter.get("", (req, res) => new PlayerController(req, res).getAll());

module.exports = playerRouter;
