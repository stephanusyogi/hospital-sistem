const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CatatanKeperawatanSchema = new Schema({
  status_pulang: {
    type: Boolean,
  },
  no_rekam_medis: {
    type: String,
    required: true,
    ref: 'Patient',
    field: 'no_rekam_medis'
  },
  catatan: {
    type: String,
  },
  perawat: {
    type: String,
  }
}, { timestamps: true });

module.exports = mongoose.model("RekamMedisCatatanKeperawatan", CatatanKeperawatanSchema);
