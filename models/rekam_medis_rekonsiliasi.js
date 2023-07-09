const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const RekonsiliasiSchema = new Schema({
  status_pulang: {
    type: Boolean,
  },
  no_rekam_medis: {
    type: String,
    required: true,
    ref: 'Patient',
    field: 'no_rekam_medis'
  },
  resep_non_resep: {
    type: String,
  },
  nama_obat: {
    type: String,
  },
  dosis: {
    type: String,
  },
  kandungan: {
    type: String,
  },
  frekuensi: {
    type: String,
  },
  sumber_obat: {
    type: String,
  },
  tanggal_mulai: {
    type: String,
  },
  tanggal_stop: {
    type: String,
  },
  jumlah_obat_tersisa: {
    type: String,
  },
  status_obat_saat_perawatan: {
    type: String,
  },
  status_obat_saat_pulang: {
    type: String,
  },
}, { timestamps: true });

module.exports = mongoose.model("RekamMedisRekonsiliasi", RekonsiliasiSchema);
