const BaseModel = require("./BaseModel");

class TeamModel extends BaseModel {
  queryFields;

  constructor({ fields }) {
    super("teams");

    this.init(fields && fields.split(","));
  }

  init(fields) {
    if (!fields) {
      this.fields.push("*");
    }
  }
}

module.exports = TeamModel;
