const PemberianObat = require("../../models/rekam_medis_pemberian_obat");


const createPemberianObat = async (req, res) => {
  try {
    const data = req.body;

    data.status_pulang = false
    const newData = new PemberianObat(data);

    const savedData = await newData.save();
    res
      .status(200)
      .send({ message: "Data created successfully", data: savedData });

  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
const getPemberianObatByNoRM = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await PemberianObat.find({no_rekam_medis: id, status_pulang: false});

    if (!data) {
      throw new Error("Data not found!");
    }

    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
const getPemberianObatByID = async (req, res) => {
  try {
    const { id } = req.params;
    
    const data = await PemberianObat.findById(id);

    if (!data) {
      throw new Error("Data not found!");
    }

    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
const updatePemberianObat = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedFields = req.body;

    const updatedData = await PemberianObat.findByIdAndUpdate(id, updatedFields, {
      new: true,
    });

    res.status(200).send({ data: updatedData });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
const deletePemberianObat = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedData = await PemberianObat.findByIdAndDelete(id)

    res.status(200).send({ message: "Data Deleted", data:deletedData });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = {
  deletePemberianObat,
  createPemberianObat,
  getPemberianObatByNoRM,
  getPemberianObatByID,
  updatePemberianObat
};