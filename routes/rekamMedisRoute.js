const InformasiPasien = require("../controllers/rekam-medis/informasiPasienController");
const PemeriksaanAwal = require("../controllers/rekam-medis/pemeriksaanAwalController");
const AsesmenMedisAwal = require("../controllers/rekam-medis/asesmenMedisAwalController");

const Router = require("express");
const protect = require("../middlewares/protect");

const router = Router();

router.get("/", protect, InformasiPasien.getRekamMedis);

// Informasi Pasien
router.get("/", protect, InformasiPasien.getRekamMedis);
router.get("/antrean-pasien", protect, InformasiPasien.getAntreanPasien);
router.post("/informasi-pasien", protect, InformasiPasien.createInformasiPasien);
router.put("/informasi-pasien/:id", protect, InformasiPasien.updateInformasiPasien);
router.get("/informasi-pasien-norm/:id", protect, InformasiPasien.getInformasiPasienByNoRM);
router.get("/informasi-pasien-id/:id", protect, InformasiPasien.getInformasiPasienByID);

// Pemeriksaan Awal
router.post("/pemeriksaan-awal", protect, PemeriksaanAwal.createPemeriksaanAwal);
router.put("/pemeriksaan-awal/:id", protect, PemeriksaanAwal.updatePemeriksaanAwal);
router.get("/pemeriksaan-awal-norm/:id", protect, PemeriksaanAwal.getPemeriksaanAwalByNoRM);
router.get("/pemeriksaan-awal-id/:id", protect, PemeriksaanAwal.getPemeriksaanAwalByID);

// Asesmen Medis Awal
router.post("/asesmen-medis-awal", protect, AsesmenMedisAwal.createAsesmenMedisAwal);
router.put("/asesmen-medis-awal/:id", protect, AsesmenMedisAwal.updateAsesmenMedisAwal);
router.get("/asesmen-medis-awal-norm/:id", protect, AsesmenMedisAwal.getAsesmenMedisAwalByNoRM);
router.get("/asesmen-medis-awal-id/:id", protect, AsesmenMedisAwal.getAsesmenMedisAwalByID);

module.exports = router;
