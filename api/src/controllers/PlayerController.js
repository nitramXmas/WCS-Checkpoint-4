const BaseController = require("./BaseController");
const { PlayerModel } = require("../models");

class PlayerController extends BaseController {
  constructor(req, res) {
    super(req, res);
    this.model = new PlayerModel(req.query);
  }
}

module.exports = PlayerController;
