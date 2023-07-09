const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const statusFisikRiwayatSchema = new Schema({
  diagnosa_masuk: {
    type: String
  },
  keluhan_utama: {
    type: String
  }
});
const alloanamnesaSchema = new Schema({
  riwayat_penyakit_pasien: {
    type: String
  },
  alkohol_obat: {
    type: String
  },
  merokok: {
    type: String
  },
  imunisasi: {
    type: String
  },
  riwayat_penyakit_keluarga: {
    type: String
  },
  kondisi_saat_masuk: {
    type: String
  },
  asal_pasien: {
    type: String
  },
  kepercayaan_khusus: {
    type: String
  },
  status_pernikahan: {
    type: String
  },
  aktivitas: {
    type: String
  },
  status_emosional: {
    type: String
  },
  keluarga_terdekat: {
    type: String
  },
  informasi_didapat_dari: {
    type: String
  },
  kebutuhan_privasi: {
    type: String
  },
  pendidikan: {
    type: String
  },
  penanggung_jawab_biaya: {
    type: String
  }
});
const heteroanamnesaSchema = new Schema({
  tanda_vital_suhu: {
    type: String
  },
  tanda_vital_nadi: {
    type: String
  },
  tanda_vital_spo2: {
    type: String
  },
  tanda_vital_tensi: {
    type: String
  },
  kewaspadaan: {
    type: String
  },
  alergi: {
    type: String
  },
  jenis_reaksi: {
    type: String
  },
  barang_berharga: {
    type: String
  },
  alat_bantu: {
    type: String
  }
});
const pemeriksaanKepalaLeherSchema = new Schema({
  mata: {
    type: String
  },
  hidung: {
    type: String
  },
  mulut: {
    type: String
  },
  telinga: {
    type: String
  },
  leher: {
    type: String
  }
});
const pemeriksaanThoraxSchema = new Schema({
  bentuk: {
    type: String
  },
  paru_i: {
    type: String
  },
  paru_ii: {
    type: String
  },
  jantung_i: {
    type: String
  },
  jantung_ii: {
    type: String
  },
  jantung_iii: {
    type: String
  }
});
const pemeriksaanAbdomenSchema = new Schema({
  palpasi: {
    type: String
  },
  inspeksi: {
    type: String
  },
  auskultasi: {
    type: String
  },
  perkusi: {
    type: String
  },
  asupan_diit: {
    type: String
  },
  defekasi: {
    type: String
  }
});
const pemeriksaanNeurologiSchema = new Schema({
  hasil: {
    type: String
  },
  kesadaran: {
    type: String
  }
});
const glassgowComaScaleSchema = new Schema({
  total_nilai: {
    type: String
  },
  mata: {
    type: String
  },
  verbal: {
    type: String
  },
  motorik: {
    type: String
  }
});
const pemeriksaanMuskoletalSchema = new Schema({
  mobilitas: {
    type: String
  },
  fungsi_sendi: {
    type: String
  },
  warna_kulit: {
    type: String
  },
  turgor: {
    type: String
  },
  deskripsi_frakture: {
    type: String
  }
});
const pemeriksaanNortonScaleSchema = new Schema({
  total_nilai: {
    type: String
  },
  kondisi_fisik: {
    type: String
  },
  kondisi_mental: {
    type: String
  },
  aktivitas: {
    type: String
  },
  mobilitas: {
    type: String
  },
  inkontinensia: {
    type: String
  }
});
const pemeriksaanAktivitasHarianSchema = new Schema({
  total_nilai: {
    type: String
  },
  makan_minum: {
    type: String
  },
  mandi: {
    type: String
  },
  memakai_baju: {
    type: String
  },
  bab_bak: {
    type: String
  },
  naik_turun_tempat_tidur: {
    type: String
  },
  kemampuan_menahan_bab_bak: {
    type: String
  }
});
const pemeriksaanStatusNutrisiSchema = new Schema({
  tinggi_badan: {
    type: String
  },
  berat_badan: {
    type: String
  },
  total_nilai: {
    type: String
  },
  skor_imt: {
    type: String
  },
  persentase_kehilangan_berat_badan: {
    type: String
  },
  efek_akut_nyeri: {
    type: String
  }
});
const pemeriksaanResikoJatuhSchema = new Schema({
  total_nilai: {
    type: String
  },
  riwayat_jatuh: {
    type: String
  },
  diagnosis_sekunder: {
    type: String
  },
  alat_bantu: {
    type: String
  },
  terpasang_infus: {
    type: String
  },
  gaya_berjalan: {
    type: String
  },
  status_mental: {
    type: String
  }
});
const pemeriksaanNyeriSchema = new Schema({
  nyeri: {
    type: String
  },
  deskripsi: {
    type: String
  }
});
const diagnosaKeperawatanSchema = new Schema({
  keterangan: {
    type: String
  }
});

const AsesmenRawatInapSchema = new Schema({
  status_pulang: {
    type: Boolean,
  },
  no_rekam_medis: {
    type: String,
    required: true,
    ref: 'Patient',
    field: 'no_rekam_medis'
  },
  status_fisik_riwayat: [statusFisikRiwayatSchema],
  alloanamnesa: [alloanamnesaSchema],
  heteroanamnesa: [heteroanamnesaSchema],
  pemeriksaan_kepala_leher: [pemeriksaanKepalaLeherSchema],
  pemeriksaan_thorax: [pemeriksaanThoraxSchema],
  pemeriksaan_abdomen: [pemeriksaanAbdomenSchema],
  pemeriksaan_genitourinaria: {
    type: String,
  },
  pemeriksaan_ginekologi: {
    type: String,
  },
  pemeriksaan_neurologi: [pemeriksaanNeurologiSchema],
  glassgow_coma_scale: [glassgowComaScaleSchema],
  pemeriksaan_muskoletal: [pemeriksaanMuskoletalSchema],
  pemeriksaan_norton_scale: [pemeriksaanNortonScaleSchema],
  pemeriksaan_aktivitas_harian: [pemeriksaanAktivitasHarianSchema],
  pemeriksaan_status_nutrisi: [pemeriksaanStatusNutrisiSchema],
  pemeriksaan_resiko_jatuh: [pemeriksaanResikoJatuhSchema],
  pemeriksaan_nyeri: [pemeriksaanNyeriSchema],
  diagnosa_keperawatan: [diagnosaKeperawatanSchema],
}, { timestamps: true });

module.exports = mongoose.model("RekamMedisAsesmendMedisRawatInap", AsesmenRawatInapSchema);
