const BaseModel = require("./BaseModel");

class CountryModel extends BaseModel {
  queryFields;

  constructor({ fields }) {
    super("countries");

    this.init(fields && fields.split(","));
  }

  init(fields) {
    if (!fields) {
      this.fields.push("*");
    }
  }
}

module.exports = CountryModel;
