const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PengajuanDpjpSchema = new Schema({
  status_pulang: {
    type: Boolean,
  },
  no_rekam_medis: {
    type: String,
    required: true,
    ref: 'Patient',
    field: 'no_rekam_medis'
  },
  id_dokter: {
    type: String,
    required: true,
    ref: 'Doctor',
    field: '_id'
  },
  dokter: {
    type: String,
  },
  spesialis: {
    type: String,
  },
  tgl_mulai: {
    type: String,
  },
  tgl_selesai: {
    type: String,
  },
  status_dpjp: {
    type: String,
  },
  diagnosa: {
    type: String,
  },
  keterangan_perawat: {
    type: String,
  },
  atas_permintaan_pasien: {
    type: Boolean,
  },
  status_permintaan: {
    type: Boolean,
  },
  keterangan_permintaan: {
    type: String,
  }
}, { timestamps: true });

module.exports = mongoose.model("RekamMedisPengajuanDpjp", PengajuanDpjpSchema);
