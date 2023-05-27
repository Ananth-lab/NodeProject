const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const agencySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  address1: {
    type: String,
    required: true,
  },
  address2: {
    type: String,
  },

  state: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  phone_number: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Agency", agencySchema);
