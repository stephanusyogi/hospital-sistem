const DPJP = require("../../models/rekam_medis_dpjp");
const InformasiPasien = require("../../models/rekam_medis_informasi_pasien");
const PengajuanDPJP = require("../../models/rekam_medis_pengajuan_dpjp");

const createPengajuanDPJP = async (req, res) => {
  try {
    const data = req.body;

    data.status_pulang = false
    const newData = new PengajuanDPJP(data);

    const savedData = await newData.save();
    res
      .status(200)
      .send({ message: "Data created successfully", data: savedData });

  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const createDPJP = async (req, res) => {
  try {
    const data = req.body;

    data.status_pulang = false
    data.status_permintaan = "Pending"
    const newData = new DPJP(data);

    const savedData = await newData.save();
    res
      .status(200)
      .send({ message: "Data created successfully", data: savedData });

  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const updatePengajuanDPJP = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedFields = req.body;

    const updatedData = await PengajuanDPJP.findByIdAndUpdate(id, updatedFields, {
      new: true,
    });

    res.status(200).send({ data: updatedData });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const updateDPJP = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedFields = req.body;

    const updatedData = await DPJP.findByIdAndUpdate(id, updatedFields, {
      new: true,
    });

    res.status(200).send({ data: updatedData });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const deletePengajuanDPJP = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedData = await PengajuanDPJP.findByIdAndDelete(id)

    res.status(200).send({ message: "Data Deleted", data:deletedData });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const deleteDPJP = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedData = await DPJP.findByIdAndDelete(id)

    res.status(200).send({ message: "Data Deleted", data:deletedData });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const getPengajuanDPJPByNoRM = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await PengajuanDPJP.find({no_rekam_medis: id, status_pulang: false});

    if (!data) {
      throw new Error("Data not found!");
    }

    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const getPengajuanDPJPByID = async (req, res) => {
  try {
    const { id } = req.params;
    
    const data = await PengajuanDPJP.findById(id);

    if (!data) {
      throw new Error("Data not found!");
    }

    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const getDPJPByNoRM = async (req, res) => {
  try {
    const { id } = req.params;

    const dpjpDisetujui = await DPJP.find({status_permintaan:"Disetujui", no_rekam_medis: id, status_pulang: false});
    const dpjpTidakDisetujui = await DPJP.find({status_permintaan:{ $ne: "Disetujui" }, no_rekam_medis: id, status_pulang: false});

    res.status(200).send({disetujui: dpjpDisetujui, tidak_disetujui: dpjpTidakDisetujui});
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const getDPJPByID = async (req, res) => {
  try {
    const { id } = req.params;
    
    const data = await DPJP.findById(id);

    if (!data) {
      throw new Error("Data not found!");
    }

    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};


const getPasienSaya = async (req, res) => {
  try {
    const { id } = req.params;
    
    const pengajuan_dpjp = await DPJP.find({id_dokter: id, status_pulang: false, status_permintaan:"Disetujui"});

    
    const data = []
    for (let i = 0; i < pengajuan_dpjp.length; i++) {
      const patient = await InformasiPasien.findOne({ no_rekam_medis: pengajuan_dpjp[i].no_rekam_medis, status_pulang:false });
      if (patient) {
        const patientInfo = {
          ...pengajuan_dpjp[i].toObject(),
          nama_pasien: patient.name,
          ruangan: 'Kamar '+patient.nama_kamar+' Kelas '+patient.jenis_kamar,
          asuransi: patient.nama_asuransi,
        };
        data.push(patientInfo);
      }
    }

    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const getDPJPByIDDokter = async (req, res) => {
  try {
    const { id } = req.params;
    
    const pengajuan_dpjp = await DPJP.find({id_dokter: id, status_pulang: false, status_permintaan: 'Pending'});
    const data = []
    for (let i = 0; i < pengajuan_dpjp.length; i++) {
      const patient = await InformasiPasien.findOne({ no_rekam_medis: pengajuan_dpjp[i].no_rekam_medis, status_pulang:false });
      if (patient) {
        const patientInfo = {
          ...pengajuan_dpjp[i].toObject(),
          nama_pasien: patient.name,
          ruangan: 'Kamar '+patient.nama_kamar+' Kelas '+patient.jenis_kamar,
          asuransi: patient.nama_asuransi,
        };
        data.push(patientInfo);
      }
    }

    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = {
  getPasienSaya,
  getDPJPByIDDokter,
  createPengajuanDPJP,
  createDPJP,
  updatePengajuanDPJP,
  updateDPJP,
  deletePengajuanDPJP,
  deleteDPJP,
  getPengajuanDPJPByNoRM,
  getPengajuanDPJPByID,
  getDPJPByNoRM,
  getDPJPByID
};