const HasilPemeriksaan = require("../../models/rekam_medis_hasil_pemeriksaan");

const {getStorage, ref, getDownloadURL, uploadBytesResumable} = require("firebase/storage")


const createHasilPemeriksaan = async (req, res) => {
  try {
    const data = req.body;

    data.status_pulang = false

    const newData = new HasilPemeriksaan(data);

    const savedData = await newData.save();
    res
      .status(200)
      .send({ message: "Data created successfully", data: savedData });

  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
const getHasilPemeriksaanByNoRM = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await HasilPemeriksaan.find({no_rekam_medis: id, status_pulang: false});

    if (!data) {
      throw new Error("Data not found!");
    }

    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
const getHasilPemeriksaanByID = async (req, res) => {
  try {
    const { id } = req.params;
    
    const data = await HasilPemeriksaan.findById(id);

    if (!data) {
      throw new Error("Data not found!");
    }

    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
const deleteHasilPemeriksaan = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedData = await HasilPemeriksaan.findByIdAndDelete(id)

    res.status(200).send({ message: "Data Deleted", data:deletedData });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
const uploadFileHasilPemeriksaan = async (req, res) => {
  try {
    const { id } = req.params;
    const dateTime = giveCurrentDateTime();
    const storage = getStorage()
    const storageRef = ref(storage, `hasil-pemeriksaan/${req.file.originalname + "       " + dateTime}`);
    // Create file metadata including the content type
    const metadata = {
        contentType: req.file.mimetype,
    };
    // Upload the file in the bucket storage
    const snapshot = await uploadBytesResumable(storageRef, req.file.buffer, metadata);
    //by using uploadBytesResumable we can control the progress of uploading like pause, resume, cancel

    // Grab the public url
    const downloadURL = await getDownloadURL(snapshot.ref);
    
    const updatedData = await HasilPemeriksaan.findByIdAndUpdate(id, {'file_dir': downloadURL}, {
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
  createHasilPemeriksaan,
  getHasilPemeriksaanByNoRM,
  getHasilPemeriksaanByID,
  deleteHasilPemeriksaan,
  uploadFileHasilPemeriksaan
};