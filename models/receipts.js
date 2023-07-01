const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const administrasiSchema = new Schema({
  deskripsi: {
    type: String
  },
  tanggal: {
    type: String
  },
  harga_satuan: {
    type: String
  },
  quantity: {
    type: String
  }
});

const ruangPerawatanSchema = new Schema({
  deskripsi: {
    type: String
  },
  tanggal: {
    type: String
  },
  harga_satuan: {
    type: String
  },
  quantity: {
    type: String
  }
})

const visitDokterSchema = new Schema({
  nama_dokter: {
    type: String
  },
  tanggal: {
    type: String
  },
  harga_satuan: {
    type: String
  },
  quantity: {
    type: String
  }
})

const obatBahanHabisPakaiSchema = new Schema({
  deskripsi: {
    type: String
  },
  tanggal: {
    type: String
  },
  harga_satuan: {
    type: String
  },
  quantity: {
    type: String
  }
})

const tindakanMedisSchema = new Schema({
  deskripsi: {
    type: String
  },
  tanggal: {
    type: String
  },
  harga_satuan: {
    type: String
  },
  quantity: {
    type: String
  }
});

const ReceiptSchema = new Schema({
  status_pulang: {
    type: Boolean,
  },
  no_rekam_medis: {
    type: String,
    required: true,
    ref: 'Patient',
    field: 'no_rekam_medis'
  },
  tgl_pembayaran: {
    type: String,
  },
  nama_pasien: {
    type: String,
  },
  asuransi: {
    type: String,
  },
  total_biaya: {
    type: String,
  },
  tgl_lahir: {
    type: String,
  },
  dokter_utama: {
    type: String,
  },
  ruang_perawatan: {
    type: String,
  },
  kelas: {
    type: String,
  },
  tgl_masuk: {
    type: String,
  },
  tgl_keluar: {
    type: String,
  },
  status: {
    type: Boolean,
  },
  administrasi: [administrasiSchema],
  ruang_perawatan: [ruangPerawatanSchema],
  visit_dokter: [visitDokterSchema],
  obat_bahan_habis_pakai: [obatBahanHabisPakaiSchema],
  tindakan_medis: [tindakanMedisSchema],
}, { timestamps: true });

module.exports = mongoose.model("Receipts", ReceiptSchema);
