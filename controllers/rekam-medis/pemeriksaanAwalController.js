const AntreanPasien = require("../../models/rekam_medis_antrean_pasien");
const PemeriksaanAwal = require("../../models/rekam_medis_pemeriksaan_awal");
const InformasiPasien = require("../../models/rekam_medis_informasi_pasien");


const createPemeriksaanAwal = async (req, res) => {
  try {
    const data = req.body;

    const existingData = await PemeriksaanAwal.findOne({ $or: [{ no_rekam_medis: data.no_rekam_medis, status_pulang: false }] });
    const informasi_pasien = await InformasiPasien.findOne({ $or: [{ no_rekam_medis: data.no_rekam_medis, status_pulang: false }] });

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
      id_dokter: data.id_dokter,
      icd_10: data.icd_10.map(item_icd_10 => ({ kode: item_icd_10.kode, desc: item_icd_10.desc })),
      icd_9: data.icd_9.map(item_item_9 => ({ kode: item_item_9.kode, desc: item_item_9.desc })),
      id_kamar: data.id_kamar,
      jenis_kamar: data.jenis_kamar,
      nama_kamar: data.nama_kamar
    });

    if(informasi_pasien){
      // Add Kamar to Informasi Pasien
      const dataInformasiPasien = {
        jenis_kamar: data.jenis_kamar,
        nama_kamar: data.nama_kamar
      }
      const updatedData = await InformasiPasien.findByIdAndUpdate(informasi_pasien._id, dataInformasiPasien, {
        new: true,
      });
    }

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

    const data = await PemeriksaanAwal.findOne({no_rekam_medis: id, status_pulang: false});

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


module.exports = {
  createPemeriksaanAwal,
  getPemeriksaanAwalByNoRM,
  getPemeriksaanAwalByID,
  updatePemeriksaanAwal
};