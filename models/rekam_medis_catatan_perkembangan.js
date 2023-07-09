const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const instruksiSchema = new Schema({
  deskripsi: {
    type: String
  }
});

const CatatanPerkembanganSchema = new Schema({
  status_pulang: {
    type: Boolean,
  },
  no_rekam_medis: {
    type: String,
    required: true,
    ref: 'Patient',
    field: 'no_rekam_medis'
  },
  subjective: {
    type: String,
  },
  objective: {
    type: String,
  },
  assessment: {
    type: String,
  },
  plan: {
    type: String,
  },
  sasaran: {
    type: String,
  },
  ppa: {
    type: String,
  },
  identitas_ppa: {
    type: String,
  },
  verifikasi_dpjp: {
    type: String,
  },
  instruksi: {
    type: String,
  },
  visitasi_dokter: {
    type: Boolean,
  },
}, { timestamps: true });

module.exports = mongoose.model("RekamMedisCatatanPerkembangan", CatatanPerkembanganSchema);
