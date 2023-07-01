const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const KopiResepSchema = new Schema({
  status_pulang: {
    type: Boolean,
  },
  no_rekam_medis: {
    type: String,
    required: true,
    ref: 'Patient',
    field: 'no_rekam_medis'
  },
  uraian: {
    type: String,
  },
  file_dir: {
    type: String,
  },
}, { timestamps: true });

module.exports = mongoose.model("RekamMedisKopiResep", KopiResepSchema);
