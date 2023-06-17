const RekamMedis = require("../controllers/rekamMedisController");
const Router = require("express");
const protect = require("../middlewares/protect");

const router = Router();

// Informasi Pasien
router.get("/antrean-pasien", protect, RekamMedis.getAntreanPasien);
router.post("/informasi-pasien", protect, RekamMedis.createInformasiPasien);
router.put("/informasi-pasien/:id", protect, RekamMedis.updateInformasiPasien);
router.get("/informasi-pasien-norm/:id", protect, RekamMedis.getInformasiPasienByNoRM);
router.get("/informasi-pasien-id/:id", protect, RekamMedis.getInformasiPasienByID);

// Pemeriksaan Awal
router.post("/pemeriksaan-awal", protect, RekamMedis.createPemeriksaanAwal);
router.put("/pemeriksaan-awal/:id", protect, RekamMedis.updatePemeriksaanAwal);
router.get("/pemeriksaan-awal-norm/:id", protect, RekamMedis.getPemeriksaanAwalByNoRM);
router.get("/pemeriksaan-awal-id/:id", protect, RekamMedis.getPemeriksaanAwalByID);

// Asesmen Medis Awal
router.post("/asesmen-medis-awal", protect, RekamMedis.createAsesmenMedisAwal);
router.put("/asesmen-medis-awal/:id", protect, RekamMedis.createAsesmenMedisAwal);
router.get("/asesmen-medis-awal-norm/:id", protect, RekamMedis.createAsesmenMedisAwal);

module.exports = router;
