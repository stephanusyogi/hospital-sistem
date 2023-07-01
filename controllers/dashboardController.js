const Receipt = require("../models/receipts");
const Patient = require("../models/patients");
const User = require("../models/users");
const Room = require("../models/rooms");
const Drug = require("../models/drugs");

const InformasiPasien = require("../models/rekam_medis_informasi_pasien");

const getDashboard = async (req, res) => {
  try {
    const pasien = await Patient.count({is_deleted: false});
    const dokter = await User.count({role: "Dokter", accountActive: true});
    const petugas = await User.count({role: { $ne: "Dokter" }, accountActive: true});
    const pasienInap = await InformasiPasien.count({status_pulang: false});
    const kamar = await Room.count({is_deleted: false});
    const obat = await Drug.count({is_deleted: false});
    const transaksi = await Receipt.count();
    const dokumen = await InformasiPasien.count();

    res.status(200).send({
      pasien: pasien,
      dokter: dokter,
      petugas: petugas,
      pasien_inap: pasienInap,
      kamar: kamar,
      obat: obat,
      transaksi: transaksi,
      dokumen: dokumen
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = {
  getDashboard,
};