const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const BpjsSchema = new Schema({
  nik: {
    type: String,
    required: true,
  },
  no_sep: {
    type: String,
    required: true,
  },
  tgl_sep: {
    type: String,
    required: true,
  },
  no_peserta: {
    type: String,
    required: true,
  },
  poliklinik: {
    type: String,
  },
  asal_faskes: {
    type: String,
  },
  diagnosa: {
    type: String,
  },
  jenis_peserta: {
    type: String,
  },
  jenis_rawat: {
    type: String,
  },
  kelas_rawat: {
    type: String,
  },
  status: {
    type: Boolean,
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model("bpjs", BpjsSchema);
