const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const dpjpSchema = new Schema({
  dpjp: {
    type: String
  },
})

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

const ringkasanInformasiSchema = new Schema({
  tgl_masuk: {
    type: String
  },
  tgl_keluar: {
    type: String
  },
  ruangan: {
    type: String
  },
  kelas: {
    type: String
  },
  jenis_pembayaran: {
    type: String
  },
  nama_asuransi: {
    type: String
  },
  nomor_asuransi: {
    type: String
  },
  status_asuransi: {
    type: String
  },
  dpjp_utama: {
    type: String
  },
  dpjp: [dpjpSchema],
  diagnosa_medis: {
    type: String
  },
  alergi: {
    type: String
  },
  indikasi_rawat_inap: {
    type: String
  },
  pemeriksaan_fisik: {
    type: String
  },
  hasil_pemeriksaan_penunjang: {
    type: String
  },
  diagnosa_utama: [Icd10Schema],
  diagnosa_sekunder: [Icd10Schema],
  terapi_selama_dirawat: {
    type: String
  },
  terapi_dirumah: {
    type: String
  },
  tindakan_sudah_dilakukan: [Icd9Schema]
});

const kondisiPasienPulangSchema = new Schema({
  keadaan_umum_t: {
    type: String
  },
  keadaan_umum_s: {
    type: String
  },
  keadaan_umum_n: {
    type: String
  },
  keadaan_umum_spo2: {
    type: String
  },
  keadaan_umum_rr: {
    type: String
  },
  cara_pulang: {
    type: String
  },
  keadaan_pulang: {
    type: String
  }
})

const instruksiTindakLanjutSchema = new Schema({
  kontrol_poliklinik: {
    type: String
  },
  kontrol_tanggal: {
    type: String
  },
  kontrol_dpjp: {
    type: String
  },
  kontrol_jam: {
    type: String
  },
  rujuk_instansi: {
    type: String
  },
  rujuk_tanggal: {
    type: String
  },
  rujuk_keterangan: {
    type: String
  }
})

const edukasiPasienSchema= new Schema({
  deskripsi: {
    type: String
  }
})

// const RingkasanPasienPulangSchema = new Schema({
//   status_pulang: {
//     type: Boolean,
//   },
//   no_rekam_medis: {
//     type: String,
//     required: true,
//     ref: 'Patient',
//     field: 'no_rekam_medis'
//   },
//   ringkasan_informasi: [ringkasanInformasiSchema],
//   kondisi_pasien_pulang: [kondisiPasienPulangSchema],
//   instruksi_tindak_lanjut: [instruksiTindakLanjutSchema],
//   edukasi_pasien: [edukasiPasienSchema],
// }, { timestamps: true });

const RingkasanPasienPulangSchema = new Schema({
  status_pulang: {
    type: Boolean,
  },
  no_rekam_medis: {
    type: String,
    required: true,
    ref: 'Patient',
    field: 'no_rekam_medis'
  },
  keadaan_umum_t: {
    type: String
  },
  keadaan_umum_s: {
    type: String
  },
  keadaan_umum_n: {
    type: String
  },
  keadaan_umum_spo2: {
    type: String
  },
  keadaan_umum_rr: {
    type: String
  },
  cara_pulang: {
    type: String
  },
  keadaan_pulang: {
    type: String
  },
}, { timestamps: true });

module.exports = mongoose.model("RekamMedisRingkasanPasienPulang", RingkasanPasienPulangSchema);
