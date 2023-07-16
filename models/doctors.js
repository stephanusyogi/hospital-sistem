const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const DoctorSchema = new Schema({
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
  spesialis: {
    type: String,
    required: true,
  },
  accountActive: {
    type: Boolean,
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model("Doctor", DoctorSchema);