const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const anamnesaSchema = new Schema({
  keluhan_utama: {
    type: String
  },
  riwayat_penyakit_sekarang: {
    type: String
  },
  riwayat_penyakit_keluarga: {
    type: String
  },
  riwayat_pengobatan: {
    type: String
  },
  riwayat_alergi: {
    type: String
  }
});
const pemeriksaanFisikSchema = new Schema({
  keadaan_umum: {
    type: String
  },
  kepala_leher: {
    type: String
  },
  ekstremitas: {
    type: String
  },
  genitalia: {
    type: String
  },
  kesadaran: {
    type: String
  },
  gcs: {
    type: String
  },
  status_gizi: {
    type: String
  },
  bb: {
    type: String
  },
  thorax_cor: {
    type: String
  },
  thorax_pulmo: {
    type: String
  },
  abdomen_inspeksi: {
    type: String
  },
  abdomen_palpasi: {
    type: String
  },
  abdomen_auskultasi: {
    type: String
  },
  abdomen_perkusi: {
    type: String
  },
  vital_sign_tensi: {
    type: String
  },
  vital_sign_nadi: {
    type: String
  },
  vital_sign_suhu: {
    type: String
  },
  vital_sign_rr: {
    type: String
  }
});
const pemeriksaanPenunjangSchema = new Schema({
  laboratorium: {
    type: String
  },
  radiologi: {
    type: String
  },
  lain_lain: {
    type: String
  }
});
const rencanaAsuhanPemeriksaanPenunjangSchema = new Schema({
  uraian_rencana_asuhan: {
    type: String
  },
  terapi: {
    type: String
  },
  tindakan: {
    type: String
  },
  nutrisi: {
    type: String
  },
  konsultasi: {
    type: String
  }
});
const pengkajianRencanaPemulanganSchema = new Schema({
  usia_lanjut: {
    type: Boolean
  },
  hambatan_mobilitasi: {
    type: Boolean
  },
  membutuhkan_perawatan_lanjutan: {
    type: Boolean
  },
  ketergantungan_orang_lain: {
    type: Boolean
  }
});

const AsesmenMedisAwalSchema = new Schema({
  status_pulang: {
    type: Boolean,
  },
  no_rekam_medis: {
    type: String,
    required: true,
    ref: 'Patient',
    field: 'no_rekam_medis'
  },
  anamnesa: [anamnesaSchema],
  pemeriksaan_fisik: [pemeriksaanFisikSchema],
  pemeriksaan_penunjang: [pemeriksaanPenunjangSchema],
  masalah: {
    type: String,
  },
  diagnosis: {
    type: String,
  },
  rencana_asuhan_pemeriksaan_penunjang: [rencanaAsuhanPemeriksaanPenunjangSchema],
  unit_asal_rujukan: {
    type: String,
  },
  sasaran: {
    type: String,
  },
  rencana_monitoring: {
    type: String,
  },
  efek_samping: {
    type: String,
  },
  prognosa: {
    type: String,
  },
  pengkajian_rencana_pemulangan_pasien: [pengkajianRencanaPemulanganSchema],
}, { timestamps: true });

module.exports = mongoose.model("RekamMedisAsesmendMedisAwal", AsesmenMedisAwalSchema);
