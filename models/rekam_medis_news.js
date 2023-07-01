const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const dataNEWSSchema = new Schema({
  hari: {
    type: String,
  },
  rr: {
    type: String,
  },
  rr_score: {
    type: String,
  },
  spo2: {
    type: String,
  },
  spo2_score: {
    type: String,
  },
  alat_bantu_o2_score: {
    type: String,
  },
  suhu: {
    type: String,
  },
  suhu_score: {
    type: String,
  },
  tekanan_darah: {
    type: String,
  },
  tekanan_darah_score: {
    type: String,
  },
  nadi: {
    type: String,
  },
  nadi_score: {
    type: String,
  },
  tingkat_kesadaran_sadar: {
    type: String,
  },
  tingkat_kesadaran_vpu: {
    type: String,
  },
  kadar_gula_darah_score: {
    type: String,
  },
  total_news_score: {
    type: String,
  },
});

const NewsSchema = new Schema({
  status_pulang: {
    type: Boolean,
  },
  no_rekam_medis: {
    type: String,
    required: true,
    ref: 'Patient',
    field: 'no_rekam_medis'
  },
  data_news: [dataNEWSSchema],
}, { timestamps: true });

module.exports = mongoose.model("RekamMedisNews", NewsSchema);
