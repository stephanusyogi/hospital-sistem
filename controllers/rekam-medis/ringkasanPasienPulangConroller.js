const RingkasanPasienPulang = require("../../models/rekam_medis_ringkasan_pasien_pulang");

const createRingkasanPasienPulang = async (req, res) => {
  try {
    const data = req.body;

    const existingData = await RingkasanPasienPulang.findOne({ $or: [{ no_rekam_medis: data.no_rekam_medis, status_pulang: false }] });

    if (existingData) {
      throw new Error("Data already exist!");
    }

    data.status_pulang = false
    const newData = new RingkasanPasienPulang(data);

    const savedData = await newData.save();
    res
      .status(200)
      .send({ message: "Data created successfully", data: savedData });

  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
const getRingkasanPasienPulangByNoRM = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await RingkasanPasienPulang.findOne({no_rekam_medis: id, status_pulang: false});

    if (!data) {
      throw new Error("Data not found!");
    }

    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
const getRingkasanPasienPulangByID = async (req, res) => {
  try {
    const { id } = req.params;
    
    const data = await RingkasanPasienPulang.findById(id);

    if (!data) {
      throw new Error("Data not found!");
    }

    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
const updateRingkasanPasienPulang = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedFields = req.body;

    const updatedData = await RingkasanPasienPulang.findByIdAndUpdate(id, updatedFields, {
      new: true,
    });

    res.status(200).send({ data: updatedData });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = {
  createRingkasanPasienPulang,
  getRingkasanPasienPulangByNoRM,
  getRingkasanPasienPulangByID,
  updateRingkasanPasienPulang
};