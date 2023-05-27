const mongoose = require("mongoose");

const schema = mongoose.Schema;

const ClientSchema = new schema({
  agency_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Agency",
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone_number: {
    type: String,
    required: true,
  },
  total_bill: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Client", ClientSchema);
