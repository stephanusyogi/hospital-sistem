const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const generalSchema = new Schema({
  ruangan_asal: {
    type: String
  },
  ruangan_tujuan: {
    type: String
  },
  petugas_yang_menghubungi: {
    type: String
  },
  petugas_penerima: {
    type: String
  },
  tanggal_berangkat: {
    type: String
  },
  jam_berangkat: {
    type: String
  },
  alasan_mentransfer: {
    type: String
  },
  level_transfer: {
    type: String
  },
  indikasi_dirawat: {
    type: String
  },
  diagnosa_medis: {
    type: String
  },
  dpjp_utama: {
    type: String
  },
  dpjp: {
    type: String
  }
});
const pemeriksaanDiagnostikSchema = new Schema({
  jenis: {
    type: String
  },
  dibawakan: {
    type: String
  }
})
const pengobatanSudahDiberikanSchema = new Schema({
  deskripsi: {
    type: String
  }
})
const prosedurSudahDilakukanSchema = new Schema({
  deskripsi: {
    type: String
  }
})
const catatanKlinisSchema = new Schema({
  anamnesis: {
    type: String
  },
  pemeriksaan_fisik: {
    type: String
  },
  pemeriksaan_diagnostik: [pemeriksaanDiagnostikSchema],
  alergi: {
    type: String
  },
  riwayat_penyakit: {
    type: String
  },
  pengobatan_sudah_diberi: [pengobatanSudahDiberikanSchema],
  pengobatan_sudah_dilakukan: [prosedurSudahDilakukanSchema],
  luka: {
    type: String
  },
  makan_minum_terakhir: {
    type: String
  },
  lain_lain: {
    type: String
  }
});
const kondisiPasienSebelumTransferSchema = new Schema({
  kesadaran_umum: {
    type: String
  },
  kesadaran: {
    type: String
  },
  gcs: {
    type: String
  },
  tekanan_darah: {
    type: String
  },
  suhu: {
    type: String
  },
  nadi: {
    type: String
  },
  rr: {
    type: String
  },
  saturasi: {
    type: String
  },
  skala_nyeri: {
    type: String
  },
  resiko_jatuh: {
    type: String
  }
});
const kondisiPasienSaatDiterimaSchema = new Schema({
  kesadaran_umum: {
    type: String
  },
  kesadaran: {
    type: String
  },
  gcs: {
    type: String
  },
  tekanan_darah: {
    type: String
  },
  suhu: {
    type: String
  },
  nadi: {
    type: String
  },
  rr: {
    type: String
  },
  saturasi: {
    type: String
  },
  skala_nyeri: {
    type: String
  },
  resiko_jatuh: {
    type: String
  }
});

const TransferPasienInternalSchema = new Schema({
  status_pulang: {
    type: Boolean,
  },
  no_rekam_medis: {
    type: String,
    required: true,
    ref: 'Patient',
    field: 'no_rekam_medis'
  },
  general: [generalSchema],
  catatan_klinis: [catatanKlinisSchema],
  kondisi_pasien_sebelum_transfer: [kondisiPasienSebelumTransferSchema],
  kondisi_pasien_saat_diterima: [kondisiPasienSaatDiterimaSchema],
}, { timestamps: true });

module.exports = mongoose.model("RekamMedisTransferPasienInternal", TransferPasienInternalSchema);
