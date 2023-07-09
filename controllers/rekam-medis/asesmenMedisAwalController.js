const AsesmenMedisAwal = require("../../models/rekam_medis_asesmen_medis_awal");


const createAsesmenMedisAwal = async (req, res) => {
  try {
    const data = req.body;

    const existingData = await AsesmenMedisAwal.findOne({ $or: [{ no_rekam_medis: data.no_rekam_medis, status_pulang: false }] });

    if (existingData) {
      throw new Error("Data already exist!");
    }

    data.status_pulang = false
    const newData = new AsesmenMedisAwal(data);

    const savedData = await newData.save();
    res
      .status(200)
      .send({ message: "Data created successfully", data: savedData });

  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
const getAsesmenMedisAwalByNoRM = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await AsesmenMedisAwal.findOne({no_rekam_medis: id, status_pulang: false});

    if (!data) {
      throw new Error("Data not found!");
    }

    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
const getAsesmenMedisAwalByID = async (req, res) => {
  try {
    const { id } = req.params;
    
    const data = await AsesmenMedisAwal.findById(id);

    if (!data) {
      throw new Error("Data not found!");
    }

    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
const updateAsesmenMedisAwal = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedFields = req.body;

    const updatedData = await AsesmenMedisAwal.findByIdAndUpdate(id, updatedFields, {
      new: true,
    });

    res.status(200).send({ data: updatedData });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = {
  createAsesmenMedisAwal,
  getAsesmenMedisAwalByNoRM,
  getAsesmenMedisAwalByID,
  updateAsesmenMedisAwal
};