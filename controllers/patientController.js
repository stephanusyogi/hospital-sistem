const Patient = require("../models/patients");

const createPatient = async (req, res) => {
  try {
    const {
      name,
      nik,
      umur,
      jenis_kelamin,
      tempat_lahir,
      tanggal_lahir,
      no_hp,
      agama,
      alamat_ktp,
      alamat_domisili,
    } = req.body;

    if (
      !name ||
      !nik ||
      !umur ||
      !jenis_kelamin ||
      !no_hp ||
      !agama ||
      !alamat_ktp ||
      !alamat_domisili
    ) {
      throw new Error("This field are required!");
    }

    const existingPatient = await Patient.findOne({ $or: [{ nik }] });

    if (existingPatient) {
      throw new Error("Patient already exist with this nik!");
    }

    let generate_no_rm = Math.floor(Math.random() * 100000) + 10000;
    let existingNoRM = Patient.find({ no_rekam_medis: generate_no_rm });

    while (existingNoRM.length > 0) {
      generate_no_rm = Math.floor(Math.random() * 100000) + 10000;
      existingNoRM = Patient.find({ no_rekam_medis: generate_no_rm });
    }

    const newPatient = new Patient({
      name,
      no_rekam_medis: generate_no_rm,
      nik,
      umur,
      jenis_kelamin,
      tempat_lahir,
      tanggal_lahir,
      no_hp,
      agama,
      alamat_ktp,
      alamat_domisili,
      is_deleted: false,
    });

    const savedPatient = await newPatient.save();
    res
      .status(200)
      .send({ message: "Patient created successfully", patient: savedPatient });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const getPatient = async (req, res) => {
  try {
    const patient = await Patient.find({ is_deleted: false }).sort({ createdAt: -1 });

    res.status(200).send(patient);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const getPatientById = async (req, res) => {
  try {
    const { id } = req.params;
    const patient = await Patient.findById(id);

    if (!id) {
      throw new Error("Patient not found!");
    }

    res.status(200).send(patient);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const getPatientByNoRM = async (req, res) => {
  try {
    const { id } = req.params;
    const patient = await Patient.find({no_rekam_medis: id});

    if (!id) {
      throw new Error("Patient not found!");
    }

    res.status(200).send(patient);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const updatePatient = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedFields = req.body;

    const updatedPatient = await Patient.findByIdAndUpdate(id, updatedFields, {
      new: true,
    });

    res.status(200).send({ patient: updatedPatient });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const deletePatient = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedFields = {
      is_deleted: true,
    };

    const deletedPatient = await Patient.findByIdAndUpdate(id, updatedFields, {
      new: true,
    });

    res.status(200).send({ patient: deletedPatient });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = {
  createPatient,
  getPatientByNoRM,
  getPatient,
  getPatientById,
  updatePatient,
  deletePatient,
};
