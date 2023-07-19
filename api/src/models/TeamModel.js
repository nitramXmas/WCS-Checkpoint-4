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

  getAll() {
    return this.db.query(
      `SELECT ${this.fields} FROM ${this.table} WHERE country_id = ? ${this.join}`,
      []
    );
  }
}

module.exports = TeamModel;
