const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Icd10Schema = new Schema({
  kode: {
    type: String
  },
  desc: {
    type: String
  }
});

const Icd9Schema = new Schema({
  kode: {
    type: String
  },
  desc: {
    type: String
  }
});

const PemeriksaanAwalSchema = new Schema({
  status_pulang: {
    type: Boolean,
  },
  no_rekam_medis: {
    type: String,
    required: true,
    ref: 'Patient',
    field: 'no_rekam_medis'
  },
  unit_penerima: {
    type: String,
  },
  poliklinik_penerima: {
    type: String,
  },
  asal_rujukan: {
    type: String,
  },
  unit_asal_rujukan: {
    type: String,
  },
  dpjp: {
    type: String,
  },
  icd_10: [Icd10Schema],
  icd_9: [Icd9Schema],
  jenis_kamar: {
    type: String,
  },
  nama_kamar: {
    type: String,
  },
}, { timestamps: true });

module.exports = mongoose.model("RekamMedisPemeriksaanAwal", PemeriksaanAwalSchema);
