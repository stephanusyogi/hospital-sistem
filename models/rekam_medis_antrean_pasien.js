const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const AntreanPasienSchema = new Schema({
  nama: {
    type: String,
    required: true,
  },
  no_rekam_medis: {
    type: String,
    required: true,
    ref: 'Patient',
    field: 'no_rekam_medis'
  },
  nik: {
    type: String,
  },
  nama_asuransi: {
    type: String,
  },
  nomor_asuransi: {
    type: String,
  },
  status_asuransi: {
    type: Boolean,
  }
}, { timestamps: true });

module.exports = mongoose.model("RekamMedisAntreanPasien", AntreanPasienSchema);
