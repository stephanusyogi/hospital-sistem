const TransferPasienInternal = require("../../models/rekam_medis_transfer_pasien_internal");

const createTransferPasienInternal = async (req, res) => {
  try {
    const data = req.body;

    const existingData = await TransferPasienInternal.findOne({ $or: [{ no_rekam_medis: data.no_rekam_medis, status_pulang: false }] });

    if (existingData) {
      throw new Error("Data already exist!");
    }

    data.status_pulang = false
    const newData = new TransferPasienInternal(data);

    const savedData = await newData.save();
    res
      .status(200)
      .send({ message: "Data created successfully", data: savedData });

  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
const getTransferPasienInternalByNoRM = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await TransferPasienInternal.findOne({no_rekam_medis: id, status_pulang: false});

    if (!data) {
      throw new Error("Data not found!");
    }

    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
const getTransferPasienInternalByID = async (req, res) => {
  try {
    const { id } = req.params;
    
    const data = await TransferPasienInternal.findById(id);

    if (!data) {
      throw new Error("Data not found!");
    }

    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
const updateTransferPasienInternal = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedFields = req.body;

    const updatedData = await TransferPasienInternal.findByIdAndUpdate(id, updatedFields, {
      new: true,
    });

    res.status(200).send({ data: updatedData });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = {
  createTransferPasienInternal,
  getTransferPasienInternalByNoRM,
  getTransferPasienInternalByID,
  updateTransferPasienInternal
};