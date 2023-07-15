const AntreanPasien = require("../../models/rekam_medis_antrean_pasien");
const AsesmenMedisAwal = require("../../models/rekam_medis_asesmen_medis_awal");
const AsesmenMedisRawatInap = require("../../models/rekam_medis_asesmen_medis_rawat_inap");
const CatatanKeperawatan = require("../../models/rekam_medis_catatan_keperawatan");
const CatatanPerkembangan = require("../../models/rekam_medis_catatan_perkembangan");
const DPJP = require("../../models/rekam_medis_dpjp");
const EdukasiPasien = require("../../models/rekam_medis_edukasi_pasien");
const HasilPemeriksaan = require("../../models/rekam_medis_hasil_pemeriksaan");
const InformasiPasien = require("../../models/rekam_medis_informasi_pasien");
const KopiResep = require("../../models/rekam_medis_kopi_resep");
const Log = require("../../models/rekam_medis_log");
const NEWS = require("../../models/rekam_medis_news");
const ObservasiCairan = require("../../models/rekam_medis_observasi_cairan");
const PemberianObat = require("../../models/rekam_medis_pemberian_obat");
const PemeriksaanAwal = require("../../models/rekam_medis_pemeriksaan_awal");
const Rekonsiliasi = require("../../models/rekam_medis_rekonsiliasi");
const RingkasanPasienPulang = require("../../models/rekam_medis_ringkasan_pasien_pulang");
const TransferPasienInternal = require("../../models/rekam_medis_transfer_pasien_internal");
const Receipt = require("../../models/receipts");


const getRekamMedis = async (req, res) => {
  try {
    const informasi_pasien = await InformasiPasien.find().sort({ createdAt: 1 });

    res.status(200).send(informasi_pasien);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const getAntreanPasien = async (req, res) => {
  try {
    const data = await AntreanPasien.find().sort({ createdAt: 1 });

    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
const createInformasiPasien = async (req, res) => {
  try {
    const data = req.body;

    const existingData = await InformasiPasien.findOne({ $or: [{ no_rekam_medis: data.no_rekam_medis, status_pulang: false }] });

    // Add Antrean
    const existingAntrean = await AntreanPasien.findOne({ $or: [{ no_rekam_medis: data.no_rekam_medis }] });
    
    const existingReceipt = await Receipt.findOne({ $or: [{ no_rekam_medis: data.no_rekam_medis, status_pulang: false  }] });

    if (existingData || existingAntrean || existingReceipt) {
      throw new Error("Data already exist!");
    }

    const newData = new InformasiPasien({
      name: data.name,
      no_rekam_medis: data.no_rekam_medis,
      nik: data.nik,
      umur: data.umur,
      jenis_kelamin: data.jenis_kelamin,
      tempat_lahir: data.tempat_lahir,
      tanggal_lahir: data.tanggal_lahir,
      no_hp: data.no_hp,
      agama: data.agama,
      alamat_ktp: data.alamat_ktp,
      alamat_domisili: data.alamat_domisili,
      nama_penanggungjawab: data.nama_penanggungjawab,
      hubungan_dengan_pasien: data.hubungan_dengan_pasien,
      alamat_domisili_penanggungjawab: data.alamat_domisili_penanggungjawab,
      alamat_ktp_penanggungjawab: data.alamat_ktp_penanggungjawab,
      no_hp_penanggungjawab: data.no_hp_penanggungjawab,
      nama_asuransi: data.nama_asuransi,
      nomor_asuransi: data.nomor_asuransi,
      status_asuransi: data.status_asuransi,
      tgl_masuk: data.tgl_masuk,
      tgl_pulang: '0000-00-00',
      status_pembayaran: false,
      status_pulang: false,
    });

    const newAntrean = new AntreanPasien({
      name: data.name,
      no_rekam_medis: data.no_rekam_medis,
      nik: data.nik,
      nama_asuransi: data.nama_asuransi,
      nomor_asuransi: data.nomor_asuransi,
      status_asuransi: Boolean(data.status_asuransi),
    })

    const newReceipt = new Receipt({
      status_pulang: false,
      no_rekam_medis: data.no_rekam_medis,
      nama_pasien: data.name,
      tgl_lahir: data.tanggal_lahir,
      tgl_masuk: data.tgl_masuk,
    })

    const savedData = await newData.save();
    const savedAntrean = await newAntrean.save();
    const savedReceipt = await newReceipt.save();
    res
      .status(200)
      .send({ message: "Data created successfully", data: savedData });

  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
const getRiwayatPasien = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await PemeriksaanAwal.find({no_rekam_medis: id});

    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
const getInformasiPasienByNoRM = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await InformasiPasien.findOne({no_rekam_medis: id, status_pulang: false});

    if (!data) {
      throw new Error("Data not found!");
    }

    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
const getInformasiPasienByID = async (req, res) => {
  try {
    const { id } = req.params;
    
    const data = await InformasiPasien.findById(id);

    if (!data) {
      throw new Error("Data not found!");
    }

    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
const updateInformasiPasien = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedFields = req.body;

    const updatedData = await InformasiPasien.findByIdAndUpdate(id, updatedFields, {
      new: true,
    });

    res.status(200).send({ data: updatedData });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
const pasienPulang = async (req, res) => {
  try {
    const { id } = req.params;
    
    const filter = {
      status_pulang: false,
      no_rekam_medis: id,
    };
    const update = {
      $set: { status_pulang: true },
    };
    const updateInformasiPasien = {
      $set: { status_pulang: true, tgl_pulang: new Date().toISOString().split("T")[0]},
    };

    const receiptData = await Receipt.findOne({ $or: [{ no_rekam_medis: id, status_pulang: false }] });
    const selisihWaktu = new Date().getTime() - new Date(receiptData.data[0].tgl_masuk).getTime();
    const jumlahMalam = Math.ceil(selisihWaktu / (1000 * 60 * 60 * 24));
    const updateReceipt = {
      $set: { status_pulang: true, 
        ruang_perawatan:{
          deskripsi: receiptData.data[0].ruang_perawatan.deskripsi,
          tanggal: receiptData.data[0].ruang_perawatan.tanggal,
          harga_satuan: receiptData.data[0].ruang_perawatan.harga_satuan,
          quantity: jumlahMalam,
        }
      }
    };

    AntreanPasien.updateMany(filter, update).then((result) => {
      if (result.nModified > 0) {}
      })
    .catch((error) => {
      console.error("Terjadi kesalahan:", error);
    });
    AsesmenMedisAwal.updateMany(filter, update).then((result) => {
      if (result.nModified > 0) {}
      })
    .catch((error) => {
      console.error("Terjadi kesalahan:", error);
    });
    AsesmenMedisRawatInap.updateMany(filter, update).then((result) => {
      if (result.nModified > 0) {}
      })
    .catch((error) => {
      console.error("Terjadi kesalahan:", error);
    });
    CatatanKeperawatan.updateMany(filter, update).then((result) => {
      if (result.nModified > 0) {} 
    })
    .catch((error) => {
      console.error("Terjadi kesalahan:", error);
    });
    CatatanPerkembangan.updateMany(filter, update).then((result) => {
      if (result.nModified > 0) {}
      })
    .catch((error) => {
      console.error("Terjadi kesalahan:", error);
    });
    DPJP.updateMany(filter, update).then((result) => {
      if (result.nModified > 0) {}
      })
    .catch((error) => {
      console.error("Terjadi kesalahan:", error);
    });
    HasilPemeriksaan.updateMany(filter, update).then((result) => {
      if (result.nModified > 0) {}
      })
    .catch((error) => {
      console.error("Terjadi kesalahan:", error);
    });
    InformasiPasien.updateMany(filter, updateInformasiPasien).then((result) => {
      if (result.nModified > 0) {}
      })
    .catch((error) => {
      console.error("Terjadi kesalahan:", error);
    });
    KopiResep.updateMany(filter, update).then((result) => {
      if (result.nModified > 0) {}
      })
    .catch((error) => {
      console.error("Terjadi kesalahan:", error);
    });
    Log.updateMany(filter, update).then((result) => {
      if (result.nModified > 0) {}
      })
    .catch((error) => {
      console.error("Terjadi kesalahan:", error);
    });
    NEWS.updateMany(filter, update).then((result) => {
      if (result.nModified > 0) {}
      })
    .catch((error) => {
      console.error("Terjadi kesalahan:", error);
    });
    ObservasiCairan.updateMany(filter, update).then((result) => {
      if (result.nModified > 0) {}
      })
    .catch((error) => {
      console.error("Terjadi kesalahan:", error);
    });
    PemberianObat.updateMany(filter, update).then((result) => {
      if (result.nModified > 0) {}
      })
    .catch((error) => {
      console.error("Terjadi kesalahan:", error);
    });
    Rekonsiliasi.updateMany(filter, update).then((result) => {
      if (result.nModified > 0) {}
      })
    .catch((error) => {
      console.error("Terjadi kesalahan:", error);
    });
    RingkasanPasienPulang.updateMany(filter, update).then((result) => {
      if (result.nModified > 0) {}
      })
    .catch((error) => {
      console.error("Terjadi kesalahan:", error);
    });
    TransferPasienInternal.updateMany(filter, update).then((result) => {
      if (result.nModified > 0) {}
      })
    .catch((error) => {
      console.error("Terjadi kesalahan:", error);
    });
    Receipt.updateMany(filter, updateReceipt).then((result) => {
      if (result.nModified > 0) {}
      })
    .catch((error) => {
      console.error("Terjadi kesalahan:", error);
    });

    res.status(200).send({ message: "Berhasil" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};


module.exports = {
  pasienPulang,
  getRekamMedis,
  getRiwayatPasien,
  getAntreanPasien,
  createInformasiPasien,
  getInformasiPasienByNoRM,
  getInformasiPasienByID,
  updateInformasiPasien
};
