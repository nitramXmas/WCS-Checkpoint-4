const BaseController = require("./BaseController");
const { CountryModel } = require("../models");

class CountryController extends BaseController {
  constructor(req, res) {
    super(req, res);
    this.model = new CountryModel(req.query);
  }
}

module.exports = CountryController;
