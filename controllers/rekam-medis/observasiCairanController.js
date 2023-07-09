const ObservasiCairan = require("../../models/rekam_medis_observasi_cairan");


const createObservasiCairan = async (req, res) => {
  try {
    const data = req.body;

    data.status_pulang = false
    const newData = new ObservasiCairan(data);

    const savedData = await newData.save();
    res
      .status(200)
      .send({ message: "Data created successfully", data: savedData });

  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
const getObservasiCairanByNoRM = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await ObservasiCairan.find({no_rekam_medis: id, status_pulang: false});

    if (!data) {
      throw new Error("Data not found!");
    }

    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
const getObservasiCairanByID = async (req, res) => {
  try {
    const { id } = req.params;
    
    const data = await ObservasiCairan.findById(id);

    if (!data) {
      throw new Error("Data not found!");
    }

    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
const updateObservasiCairan = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedFields = req.body;

    const updatedData = await ObservasiCairan.findByIdAndUpdate(id, updatedFields, {
      new: true,
    });

    res.status(200).send({ data: updatedData });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
const deleteObservasiCairan = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedData = await ObservasiCairan.findByIdAndDelete(id)

    res.status(200).send({ message: "Data Deleted", data:deletedData });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = {
  deleteObservasiCairan,
  createObservasiCairan,
  getObservasiCairanByNoRM,
  getObservasiCairanByID,
  updateObservasiCairan
};