const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const PatientSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  no_rekam_medis: {
    type: String,
    required: true,
  },
  nik: {
    type: String,
    required: true,
  },
  umur: {
    type: String,
    required: true,
  },
  jenis_kelamin: {
    type: String,
    required: true,
  },
  tempat_tanggal_lahir: {
    type: String,
    required: true,
  },
  no_hp: {
    type: String,
    required: true,
  },
  agama: {
    type: String,
    required: true,
  },
  alamat_ktp: {
    type: String,
    required: true,
  },
  alamat_domisili: {
    type: String,
    required: true,
  },
  is_deleted: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model("Patient", PatientSchema);
