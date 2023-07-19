const BaseController = require("./BaseController");
const { TeamModel } = require("../models");

class TeamController extends BaseController {
  constructor(req, res) {
    super(req, res);
    this.model = new TeamModel(req.query);
  }
}

module.exports = TeamController;
