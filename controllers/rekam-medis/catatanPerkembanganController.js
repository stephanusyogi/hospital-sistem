const CatatanPerkembangan = require("../../models/rekam_medis_catatan_perkembangan");


const createCatatanPerkembangan = async (req, res) => {
  try {
    const data = req.body;

    const existingData = await CatatanPerkembangan.findOne({ $or: [{ no_rekam_medis: data.no_rekam_medis, status_pulang: false }] });

    if (existingData) {
      throw new Error("Data already exist!");
    }

    data.status_pulang = false
    const newData = new CatatanPerkembangan(data);

    const savedData = await newData.save();
    res
      .status(200)
      .send({ message: "Data created successfully", data: savedData });

  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
const getCatatanPerkembanganByNoRM = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await CatatanPerkembangan.find({no_rekam_medis: id, status_pulang: false});

    if (!data) {
      throw new Error("Data not found!");
    }

    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
const getCatatanPerkembanganByID = async (req, res) => {
  try {
    const { id } = req.params;
    
    const data = await CatatanPerkembangan.findById(id);

    if (!data) {
      throw new Error("Data not found!");
    }

    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
const updateCatatanPerkembangan = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedFields = req.body;

    const updatedData = await CatatanPerkembangan.findByIdAndUpdate(id, updatedFields, {
      new: true,
    });

    res.status(200).send({ data: updatedData });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = {
  createCatatanPerkembangan,
  getCatatanPerkembanganByNoRM,
  getCatatanPerkembanganByID,
  updateCatatanPerkembangan
};