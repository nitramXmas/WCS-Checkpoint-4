const { db } = require("../config");

class BaseModel {
  table;
  db;

  fields = [];
  join = [];

  constructor(table) {
    this.table = table;
    this.db = db;
  }

  init() {}

  getAll() {
    return this.db.query(
      `SELECT ${this.fields} FROM ${this.table} ${this.join}`
    );
  }
}

module.exports = BaseModel;
