const BaseController = require("./BaseController");
const { TeamModel } = require("../models");

class TeamController extends BaseController {
  constructor(req, res) {
    super(req, res);
    this.model = new TeamModel(req.query);
  }

  getAll() {
    console.log(this.req.query);
    this.model.getAll().then(([results]) => this.sendJson(results));
  }
}

module.exports = TeamController;
