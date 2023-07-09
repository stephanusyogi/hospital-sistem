const EdukasiPasien = require("../../models/rekam_medis_edukasi_pasien");

const {getStorage, ref, getDownloadURL, uploadBytesResumable} = require("firebase/storage")

const createEdukasiPasien = async (req, res) => {
  try {
    const data = req.body;

    const existingData = await EdukasiPasien.findOne({ $or: [{ no_rekam_medis: data.no_rekam_medis, status_pulang: false }] });

    if (existingData) {
      throw new Error("Data already exist!");
    }

    data.status_pulang = false

    const newData = new EdukasiPasien(data);

    const savedData = await newData.save();
    res
      .status(200)
      .send({ message: "Data created successfully", data: savedData });

  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
const getEdukasiPasienByNoRM = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await EdukasiPasien.findOne({no_rekam_medis: id, status_pulang: false});

    if (!data) {
      throw new Error("Data not found!");
    }

    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
const getEdukasiPasienByID = async (req, res) => {
  try {
    const { id } = req.params;
    
    const data = await EdukasiPasien.findById(id);

    if (!data) {
      throw new Error("Data not found!");
    }

    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
const updateEdukasiPasien = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedFields = req.body;

    const updatedData = await EdukasiPasien.findByIdAndUpdate(id, updatedFields, {
      new: true,
    });

    res.status(200).send({ data: updatedData });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
const uploadFileEdukasiPasien = async (req, res) => {
  try {
    const { id } = req.params;
    const dateTime = giveCurrentDateTime();
    const storage = getStorage()
    const storageRef = ref(storage, `edukasi-pasien/${req.file.originalname + "       " + dateTime}`);
    // Create file metadata including the content type
    const metadata = {
        contentType: req.file.mimetype,
    };
    // Upload the file in the bucket storage
    const snapshot = await uploadBytesResumable(storageRef, req.file.buffer, metadata);
    //by using uploadBytesResumable we can control the progress of uploading like pause, resume, cancel

    // Grab the public url
    const downloadURL = await getDownloadURL(snapshot.ref);
    
    const updatedData = await EdukasiPasien.findByIdAndUpdate(id, {'img_dir_penandaan_lokasi_operasi': downloadURL}, {
      new: true,
    });
    
    res.status(200).send({
      message: 'file uploaded to firebase storage',
      name: req.file.originalname,
      type: req.file.mimetype,
      downloadURL: downloadURL,
      data: updatedData
    })
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const giveCurrentDateTime = () => {
  const today = new Date();
  const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  const dateTime = date + ' ' + time;
  return dateTime;
}

module.exports = {
  createEdukasiPasien,
  getEdukasiPasienByNoRM,
  getEdukasiPasienByID,
  updateEdukasiPasien,
  uploadFileEdukasiPasien
};