const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const DpjpSchema = new Schema({
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
  },
  nama_dokter: {
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
  keterangan_perawat: {
    type: String,
  },
  atas_permintaan_pasien: {
    type: Boolean,
  },
  status_permintaan: {
    type: String,
  },
  keterangan_permintaan: {
    type: String,
  }
}, { timestamps: true });

module.exports = mongoose.model("RekamMedisDpjp", DpjpSchema);
