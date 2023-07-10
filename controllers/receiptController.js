const Receipt = require("../models/receipts");
const InformasiPasien = require("../models/rekam_medis_informasi_pasien");

const getReceipts = async (req, res) => {
  try {
    const receipt = await Receipt.find().sort({ tgl_pembayaran: 1 });

    const data = []
    for (let i = 0; i < receipt.length; i++) {
      const patient = await InformasiPasien.findOne({ no_rekam_medis: receipt[i].no_rekam_medis },{ _id: 0 });
      if (patient) {
        const patientInfo = {
          ...receipt[i].toObject(),
          ...patient.toObject(),
        };
        data.push(patientInfo);
      }
    }

    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
const createReceipt = async (req, res) => {
  try {
    const data = req.body;

    const existingData = await Receipt.findOne({ $or: [{ no_rekam_medis: data.no_rekam_medis, status_pulang: false }] });

    if (existingData) {
      throw new Error("Data already exist!");
    }
    data.status_pulang = false
    const newData = new Receipt(data);

    const savedData = await newData.save();
    res
      .status(200)
      .send({ message: "Data created successfully", data: savedData });

  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
const getReceiptByNoRM = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await Receipt.find({no_rekam_medis: id, status_pulang: false});

    if (!data) {
      throw new Error("Data not found!");
    }

    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
const getReceiptByID = async (req, res) => {
  try {
    const { id } = req.params;
    
    const receipt = await Receipt.findOne({_id: id});
    const data = []
    const patient = await InformasiPasien.findOne({ no_rekam_medis: receipt.no_rekam_medis },{ _id: 0 });
    if (patient) {
      const patientInfo = {
        ...receipt.toObject(),
        ...patient.toObject(),
      };
      data.push(patientInfo);
    }

    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
const updateReceipt = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedFields = req.body;

    const updatedData = await Receipt.findByIdAndUpdate(id, updatedFields, {
      new: true,
    });

    res.status(200).send({ data: updatedData });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const updateReceiptByNoRM = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedFields = req.body;

    const updatedData = await Receipt.findOneAndUpdate(
      {no_rekam_medis: id, status_pulang: false, }, 
      updatedFields, {new: true,});

    res.status(200).send({ data: updatedData });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = {
  updateReceiptByNoRM,
  getReceipts,
  createReceipt,
  getReceiptByNoRM,
  getReceiptByID,
  updateReceipt
};