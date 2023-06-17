const AntreanPasien = require("../models/rekam_medis_antrean_pasien");
const InformasiPasien = require("../models/rekam_medis_informasi_pasien");
const PemeriksaanAwal = require("../models/rekam_medis_pemeriksaan_awal");
const AsesmenMedisAwal = require("../models/rekam_medis_asesmen_medis_awal");


// Informasi Pasien
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

    if (existingData || existingAntrean) {
      throw new Error("Data already exist!");
    }

    const newData = new InformasiPasien({
      nama: data.nama,
      no_rekam_medis: data.no_rekam_medis,
      nik: data.nik,
      umur: data.umur,
      jenis_kelamin: data.jenis_kelamin,
      tempat_tanggal_lahir: data.tempat_tanggal_lahir,
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
      status_pembayaran: false,
      status_pulang: false,
    });

    const newAntrean = new AntreanPasien({
      nama: data.nama,
      no_rekam_medis: data.no_rekam_medis,
      nik: data.nik,
      nama_asuransi: data.nama_asuransi,
      nomor_asuransi: data.nomor_asuransi,
      status_asuransi: Boolean(data.status_asuransi),
    })

    const savedData = await newData.save();
    const savedAntrean = await newAntrean.save();
    res
      .status(200)
      .send({ message: "Data created successfully", data: savedData });

  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
const getInformasiPasienByNoRM = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await InformasiPasien.find({no_rekam_medis: id, status_pulang: false});

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

// Pemeriksaan Awal
const createPemeriksaanAwal = async (req, res) => {
  try {
    const data = req.body;

    const existingData = await PemeriksaanAwal.findOne({ $or: [{ no_rekam_medis: data.no_rekam_medis, status_pulang: false }] });

    if (existingData) {
      throw new Error("Data already exist!");
    }
    
    // Delete Antrean
    const deleteAntrean = await AntreanPasien.deleteOne({no_rekam_medis: data.no_rekam_medis})

    const newData = new PemeriksaanAwal({
      status_pulang: false,
      no_rekam_medis: data.no_rekam_medis,
      unit_penerima: data.unit_penerima,
      poliklinik_penerima: data.poliklinik_penerima,
      asal_rujukan: data.asal_rujukan,
      unit_asal_rujukan: data.unit_asal_rujukan,
      dpjp: data.dpjp,
      icd_10: data.icd_10.map(item_icd_10 => ({ kode: item_icd_10.kode, desc: item_icd_10.desc })),
      icd_9: data.icd_9.map(item_item_9 => ({ kode: item_item_9.kode, desc: item_item_9.desc })),
      jenis_kamar: data.jenis_kamar,
      nama_kamar: data.nama_kamar
    });


    const savedData = await newData.save();
    res
      .status(200)
      .send({ message: "Data created successfully", data: savedData });

  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
const getPemeriksaanAwalByNoRM = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await PemeriksaanAwal.find({no_rekam_medis: id, status_pulang: false});

    if (!data) {
      throw new Error("Data not found!");
    }

    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
const getPemeriksaanAwalByID = async (req, res) => {
  try {
    const { id } = req.params;
    
    const data = await PemeriksaanAwal.findById(id);

    if (!data) {
      throw new Error("Data not found!");
    }

    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
const updatePemeriksaanAwal = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedFields = req.body;

    const updatedData = await PemeriksaanAwal.findByIdAndUpdate(id, updatedFields, {
      new: true,
    });

    res.status(200).send({ data: updatedData });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// Asesmen Medis Awal
const createAsesmenMedisAwal = async (req, res) => {
  try {
    const data = req.body;

    const existingData = await AsesmenMedisAwal.findOne({ $or: [{ no_rekam_medis: data.no_rekam_medis, status_pulang: false }] });

    if (existingData) {
      throw new Error("Data already exist!");
    }

    const newData = new AsesmenMedisAwal({
      status_pulang: false,
      no_rekam_medis: data.no_rekam_medis,
      anamnesa: {
        keluhan_utama: data.anamnesa.keluhan_utama,
        riwayat_penyakit_sekarang: data.anamnesa.riwayat_penyakit_sekarang,
        riwayat_penyakit_keluarga: data.anamnesa.riwayat_penyakit_keluarga,
        riwayat_pengobatan: data.anamnesa.riwayat_pengobatan,
        riwayat_alergi: data.anamnesa.riwayat_alergi
      },
      pemeriksaan_fisik: {
        keluhan_utama: data.anamnesa.keluhan_utama,
        riwayat_penyakit_sekarang: data.anamnesa.riwayat_penyakit_sekarang,
        riwayat_penyakit_keluarga: data.anamnesa.riwayat_penyakit_keluarga,
        riwayat_pengobatan: data.anamnesa.riwayat_pengobatan,
        riwayat_alergi: data.anamnesa.riwayat_alergi
      },
    });

    console.log(newData)


    // const savedData = await newData.save();
    // res
    //   .status(200)
    //   .send({ message: "Data created successfully", data: savedData });

  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = {
  getAntreanPasien,
  createInformasiPasien,
  getInformasiPasienByNoRM,
  getInformasiPasienByID,
  updateInformasiPasien,
  createPemeriksaanAwal,
  getPemeriksaanAwalByNoRM,
  getPemeriksaanAwalByID,
  updatePemeriksaanAwal,
  createAsesmenMedisAwal
};
