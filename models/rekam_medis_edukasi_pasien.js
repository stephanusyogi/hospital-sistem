const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const pengkajianKebutuhanEdukasiSchema = new Schema({
  keyakinan_nilai: {
    type: String
  },
  tingkat_edukasi: {
    type: String
  },
  keterbatasan_fisik: {
    type: String
  },
  bahasa_yang_digunakan: {
    type: String
  },
  hambatan_emosi: {
    type: String
  },
  kesediaan_menerima_informasi: {
    type: String
  },
  diagnosis_masuk: {
    type: String
  },
  rencana_operasi: {
    type: String
  }
});
const kebutuhanEdukasiSchema = new Schema({
  penerjemah: {
    type: String
  },
  perawatan_pendamping: {
    type: String
  },
  asuhan_berkelanjutan: {
    type: String
  },
  media_edukasi: {
    type: String
  }
});
const rencanaDpjpSchema = new Schema({
    rencana_edukasi: {
      type: String
    },
    nama_pemberi: {
      type: String
    },
    nama_penerima: {
      type: String
    },
    verifikasi_pemahaman: {
      type: Boolean
    },
    durasi_edukasi: {
      type: String
    }
});
const rencanaApotekerchema = new Schema({
    rencana_edukasi: {
      type: String
    },
    nama_pemberi: {
      type: String
    },
    nama_penerima: {
      type: String
    },
    verifikasi_pemahaman: {
      type: Boolean
    },
    durasi_edukasi: {
      type: String
    }
});
const rencanaPerawatSchema = new Schema({
    rencana_edukasi: {
      type: String
    },
    nama_pemberi: {
      type: String
    },
    nama_penerima: {
      type: String
    },
    verifikasi_pemahaman: {
      type: Boolean
    },
    durasi_edukasi: {
      type: String
    }
});
const rencanaFisioterapisSchema = new Schema({
    rencana_edukasi: {
      type: String
    },
    nama_pemberi: {
      type: String
    },
    nama_penerima: {
      type: String
    },
    verifikasi_pemahaman: {
      type: Boolean
    },
    durasi_edukasi: {
      type: String
    }
});
const rencanaNutritionisKlinisSchema = new Schema({
    rencana_edukasi: {
      type: String
    },
    nama_pemberi: {
      type: String
    },
    nama_penerima: {
      type: String
    },
    verifikasi_pemahaman: {
      type: Boolean
    },
    durasi_edukasi: {
      type: String
    }
});
const rencanaLainnyaSchema = new Schema({
    rencana_edukasi: {
      type: String
    },
    nama_pemberi: {
      type: String
    },
    nama_penerima: {
      type: String
    },
    verifikasi_pemahaman: {
      type: Boolean
    },
    durasi_edukasi: {
      type: String
    }
});

const EdukasiPasienSchema = new Schema({
  status_pulang: {
    type: Boolean,
  },
  no_rekam_medis: {
    type: String,
    required: true,
    ref: 'Patient',
    field: 'no_rekam_medis'
  },
  pengkajian_kebutuhan_edukasi: [pengkajianKebutuhanEdukasiSchema],
  kebutuhan_edukasi: [kebutuhanEdukasiSchema],
  rencana_dpjp: [rencanaDpjpSchema],
  rencana_apoteker: [rencanaApotekerchema],
  rencana_perawat: [rencanaPerawatSchema],
  rencana_fisioterapis: [rencanaFisioterapisSchema],
  rencana_nutritionis_klinis: [rencanaNutritionisKlinisSchema],
  rencana_lainnya: [rencanaLainnyaSchema],
  img_dir_penandaan_lokasi_operasi: {
    type: String,
  }
}, { timestamps: true });

module.exports = mongoose.model("RekamMedisEdukasiPasien", EdukasiPasienSchema);
