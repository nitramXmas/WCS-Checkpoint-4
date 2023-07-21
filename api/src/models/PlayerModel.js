const BaseModel = require("./BaseModel");

class PlayerModel extends BaseModel {
  queryFields;

  constructor({ fields }) {
    super("players");

    this.init(fields && fields.split(","));
  }

  init(fields) {
    if (!fields) {
      this.fields.push("*");
    }
  }

  getAll(team_id) {
    return this.db.query(
      `SELECT ${this.fields} FROM ${this.table} WHERE country_id = ? ${this.join}`,
      [team_id]
    );
  }
}

module.exports = PlayerModel;
