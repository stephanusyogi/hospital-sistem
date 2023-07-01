const Bpjs = require("../models/bpjs");
const Patient = require("../models/patients");

const getBpjs = async (req, res) => {
  try {
    const bpjs = await Bpjs.find();
    res.status(200).send(bpjs);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const getBpjsById = async (req, res) => {
  try {
    const { id } = req.params;
    const bpjs = await Bpjs.find({nik: id});

    if (bpjs.length === 0) {
      throw new Error("Data not found!");
    }

    res.status(200).send(bpjs);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};


const getBpjsByNoRM = async (req, res) => {
  try {
    const { id } = req.params;
    const patient = await Patient.find({no_rekam_medis: id});
    const bpjs = await Bpjs.find({nik: patient[0].nik});

    if (bpjs.length === 0) {
      throw new Error("Data not found!");
    }

    res.status(200).send(bpjs);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = { getBpjs, getBpjsById, getBpjsByNoRM };
