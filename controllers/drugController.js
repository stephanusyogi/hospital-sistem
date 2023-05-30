const Drug = require("../models/drugs");

const createDrug = async (req, res) => {
  try {
    const { nama_obat, harga } = req.body;

    if (!nama_obat || !harga) {
      throw new Error("This field are required!");
    }

    const newDrug = new Drug({
      nama_obat,
      harga,
      is_deleted: false,
    });

    const savedDrug = await newDrug.save();
    res
      .status(200)
      .send({ message: "Drug created successfully", drug: savedDrug });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const getDrug = async (req, res) => {
  try {
    const drugs = await Drug.find({ is_deleted: false });

    res.status(200).send(drugs);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const getDrugById = async (req, res) => {
  try {
    const { id } = req.params;
    const drug = await Drug.findById(id);

    if (!id) {
      throw new Error("Drug not found!");
    }

    res.status(200).send(drug);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const updateDrug = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedFields = req.body;

    const updatedDrug = await Drug.findByIdAndUpdate(id, updatedFields, {
      new: true,
    });

    res.status(200).send({ drug: updatedDrug });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const deleteDrug = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedFields = {
      is_deleted: true,
    };

    const deletedDrug = await Drug.findByIdAndUpdate(id, updatedFields, {
      new: true,
    });

    res.status(200).send({ room: deletedDrug });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = {
  createDrug,
  getDrug,
  getDrugById,
  updateDrug,
  deleteDrug,
};
