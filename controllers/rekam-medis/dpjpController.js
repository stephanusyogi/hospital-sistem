const DPJP = require("../../models/rekam_medis_dpjp");
const PengajuanDPJP = require("../../models/rekam_medis_pengajuan_dpjp");

const createPengajuanDPJP = async (req, res) => {
  try {
    const data = req.body;

    data.status_pulang = false
    const newData = new PengajuanDPJP(data);

    const savedData = await newData.save();
    res
      .status(200)
      .send({ message: "Data created successfully", data: savedData });

  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const createDPJP = async (req, res) => {
  try {
    const data = req.body;

    data.status_pulang = false
    const newData = new DPJP(data);

    const savedData = await newData.save();
    res
      .status(200)
      .send({ message: "Data created successfully", data: savedData });

  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const updatePengajuanDPJP = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedFields = req.body;

    const updatedData = await PengajuanDPJP.findByIdAndUpdate(id, updatedFields, {
      new: true,
    });

    res.status(200).send({ data: updatedData });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const updateDPJP = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedFields = req.body;

    const updatedData = await DPJP.findByIdAndUpdate(id, updatedFields, {
      new: true,
    });

    res.status(200).send({ data: updatedData });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const deletePengajuanDPJP = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedData = await PengajuanDPJP.findByIdAndDelete(id)

    res.status(200).send({ message: "Data Deleted", data:deletedData });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const deleteDPJP = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedData = await DPJP.findByIdAndDelete(id)

    res.status(200).send({ message: "Data Deleted", data:deletedData });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const getPengajuanDPJPByNoRM = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await PengajuanDPJP.find({no_rekam_medis: id, status_pulang: false});

    if (!data) {
      throw new Error("Data not found!");
    }

    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const getPengajuanDPJPByID = async (req, res) => {
  try {
    const { id } = req.params;
    
    const data = await PengajuanDPJP.findById(id);

    if (!data) {
      throw new Error("Data not found!");
    }

    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const getDPJPByNoRM = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await DPJP.find({no_rekam_medis: id, status_pulang: false});

    if (!data) {
      throw new Error("Data not found!");
    }

    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const getDPJPByID = async (req, res) => {
  try {
    const { id } = req.params;
    
    const data = await DPJP.findById(id);

    if (!data) {
      throw new Error("Data not found!");
    }

    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = {
  createPengajuanDPJP,
  createDPJP,
  updatePengajuanDPJP,
  updateDPJP,
  deletePengajuanDPJP,
  deleteDPJP,
  getPengajuanDPJPByNoRM,
  getPengajuanDPJPByID,
  getDPJPByNoRM,
  getDPJPByID
};