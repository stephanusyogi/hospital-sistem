const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const InformasiPasienSchema = new Schema({
  name: {
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
  tempat_lahir: {
    type: String,
    required: true,
  },
  tanggal_lahir: {
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
  nama_penanggungjawab: {
    type: String,
  },
  hubungan_dengan_pasien: {
    type: String,
  },
  alamat_domisili_penanggungjawab: {
    type: String,
  },
  alamat_ktp_penanggungjawab: {
    type: String,
  },
  no_hp_penanggungjawab: {
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
  },
  tgl_masuk: {
    type: String,
  },
  tgl_pulang: {
    type: String,
  },
  status_pembayaran: {
    type: Boolean,
  },
  status_pulang: {
    type: Boolean,
  }
}, { timestamps: true });

module.exports = mongoose.model("RekamMedisInformasiPasien", InformasiPasienSchema);
