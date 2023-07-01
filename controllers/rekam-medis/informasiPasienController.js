const AntreanPasien = require("../../models/rekam_medis_antrean_pasien");
const InformasiPasien = require("../../models/rekam_medis_informasi_pasien");
const PemeriksaanAwal = require("../../models/rekam_medis_pemeriksaan_awal");
const Receipt = require("../../models/receipts");


const getRekamMedis = async (req, res) => {
  try {
    const informasi_pasien = await InformasiPasien.find({status_pulang: false});
    
    // const dataPemeriksaanAwal = await PemeriksaanAwal.find({status_pulang: false});

    // const data = await Promise.all(dataPemeriksaanAwal.map(async (item) => {
    //   const informasi_pasien = await InformasiPasien.find({no_rekam_medis: item.no_rekam_medis, status_pulang: false})
    //   return {
    //     no_rekam_medis: item.no_rekam_medis,
    //     jenis_kamar: item.jenis_kamar,
    //     nama_kamar: item.nama_kamar,
    //     nama: informasi_pasien[0].nama,
    //     nik: informasi_pasien[0].nik,
    //     umur: informasi_pasien[0].umur,
    //     jenis_kelamin: informasi_pasien[0].jenis_kelamin,
    //     tempat_tanggal_lahir: informasi_pasien[0].tempat_tanggal_lahir,
    //     agama: informasi_pasien[0].agama,
    //     nama_asuransi: informasi_pasien[0].nama_asuransi,
    //     nomor_asuransi: informasi_pasien[0].nomor_asuransi,
    //     status_asuransi: informasi_pasien[0].status_asuransi,
    //     status_pembayaran: informasi_pasien[0].status_pembayaran,
    //     status_pulang: informasi_pasien[0].status_pulang
    //   };
    // }));
    

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
      tgl_pulang: data.tgl_pulang,
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


module.exports = {
  getRekamMedis,
  getAntreanPasien,
  createInformasiPasien,
  getInformasiPasienByNoRM,
  getInformasiPasienByID,
  updateInformasiPasien
};
