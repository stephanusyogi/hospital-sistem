const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const logSchema = new Schema({
  status_pulang: {
    type: Boolean,
  },
  no_rekam_medis: {
    type: String,
    required: true,
    ref: 'Patient',
    field: 'no_rekam_medis'
  },
  keterangan: {
    type: String
  },
  nama: {
    type: String
  },
  role: {
    type: String
  }
}, { timestamps: true });

module.exports = mongoose.model("RekamMedisLog", logSchema);
