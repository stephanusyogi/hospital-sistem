const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const frekuensiSchema = new Schema({
  verifikasi_farmasi: {
    type: Boolean
  },
  verifikasi_perawat: {
    type: Boolean
  },
  verifikasi_pasien: {
    type: Boolean
  },
  rotd: {
    type: Boolean
  },
  catatan: {
    type: String
  }
}, { timestamps: true });

const PemberianObatSchema = new Schema({
  status_pulang: {
    type: Boolean,
  },
  no_rekam_medis: {
    type: String,
    required: true,
    ref: 'Patient',
    field: 'no_rekam_medis'
  },
  dpjp: {
    type: String,
  },
  obat: {
    type: String,
  },
  dosis: {
    type: String,
  },
  rute: {
    type: String,
  },
  frekuensi: [frekuensiSchema]
}, { timestamps: true });

module.exports = mongoose.model("RekamMedisPemberianObat", PemberianObatSchema);
