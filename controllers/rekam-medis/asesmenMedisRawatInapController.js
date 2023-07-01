const AsesmenMedisRawatInap = require("../../models/rekam_medis_asesmen_medis_rawat_inap");


const createAsesmenMedisRawatInap = async (req, res) => {
  try {
    const data = req.body;

    const existingData = await AsesmenMedisRawatInap.findOne({ $or: [{ no_rekam_medis: data.no_rekam_medis, status_pulang: false }] });

    if (existingData) {
      throw new Error("Data already exist!");
    }

    data.status_pulang = false
    const newData = new AsesmenMedisRawatInap(data);

    const savedData = await newData.save();
    res
      .status(200)
      .send({ message: "Data created successfully", data: savedData });

  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
const getAsesmenMedisRawatInapByNoRM = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await AsesmenMedisRawatInap.find({no_rekam_medis: id, status_pulang: false});

    if (!data) {
      throw new Error("Data not found!");
    }

    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
const getAsesmenMedisRawatInapByID = async (req, res) => {
  try {
    const { id } = req.params;
    
    const data = await AsesmenMedisRawatInap.findById(id);

    if (!data) {
      throw new Error("Data not found!");
    }

    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
const updateAsesmenMedisRawatInap = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedFields = req.body;

    const updatedData = await AsesmenMedisRawatInap.findByIdAndUpdate(id, updatedFields, {
      new: true,
    });

    res.status(200).send({ data: updatedData });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = {
  createAsesmenMedisRawatInap,
  getAsesmenMedisRawatInapByNoRM,
  getAsesmenMedisRawatInapByID,
  updateAsesmenMedisRawatInap
};