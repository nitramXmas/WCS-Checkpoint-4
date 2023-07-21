const BaseController = require("./BaseController");
const { PlayerModel } = require("../models");

class PlayerController extends BaseController {
  constructor(req, res) {
    super(req, res);
    this.model = new PlayerModel(req.query);
  }

  getAll() {
    const team_id = this.req.query.team_id;
    this.model.getAll(team_id).then(([results]) => this.sendJson(results));
  }
}

module.exports = PlayerController;
