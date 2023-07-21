const BaseController = require("./BaseController");
const { TeamModel } = require("../models");

class TeamController extends BaseController {
  constructor(req, res) {
    super(req, res);
    this.model = new TeamModel(req.query);
  }

  getAll() {
    const country_id = this.req.query.country_id;
    this.model.getAll(country_id).then(([results]) => this.sendJson(results));
  }
}

module.exports = TeamController;
