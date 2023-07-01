const Log = require("../../models/rekam_medis_log");

const createLog = async (req, res) => {
  try {
    const data = req.body;

    const newData = new Log({
      status_pulang: false,
      no_rekam_medis: data.no_rekam_medis,
      keterangan: data.keterangan,
      nama: data.nama,
      role: data.role
    });

    const savedData = await newData.save();
    res
      .status(200)
      .send({ message: "Data created successfully", data: savedData });

  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
const getLogByNoRM = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await Log.find({no_rekam_medis: id, status_pulang: false}).sort({createdAt: -1});

    if (!data) {
      throw new Error("Data not found!");
    }

    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
const getLogByID = async (req, res) => {
  try {
    const { id } = req.params;
    
    const data = await Log.findById(id);

    if (!data) {
      throw new Error("Data not found!");
    }

    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
const updateLog = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedFields = req.body;

    const updatedData = await Log.findByIdAndUpdate(id, updatedFields, {
      new: true,
    });

    res.status(200).send({ data: updatedData });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = {
  createLog,
  getLogByNoRM,
  getLogByID,
  updateLog
};