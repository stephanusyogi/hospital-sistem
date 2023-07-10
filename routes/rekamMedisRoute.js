const InformasiPasien = require("../controllers/rekam-medis/informasiPasienController");
const PemeriksaanAwal = require("../controllers/rekam-medis/pemeriksaanAwalController");
const AsesmenMedisAwal = require("../controllers/rekam-medis/asesmenMedisAwalController");
const Log = require("../controllers/rekam-medis/logController");
const AsesmenMedisRawatInap = require("../controllers/rekam-medis/asesmenMedisRawatInapController");
const EdukasiPasien = require("../controllers/rekam-medis/edukasiPasienController");
const TransferPasienInternal = require("../controllers/rekam-medis/transferPasienInternalController");
const HasilPemeriksaan = require("../controllers/rekam-medis/hasilPemeriksaanController");
const KopiResep = require("../controllers/rekam-medis/kopiResepController");
const CatatanPerkembangan = require("../controllers/rekam-medis/catatanPerkembanganController");
const CatatanKeperawatan = require("../controllers/rekam-medis/catatanKeperawatanController");
const ObservasiCairan = require("../controllers/rekam-medis/observasiCairanController");
const PemberianObat = require("../controllers/rekam-medis/pemberianObatController");
const Rekonsiliasi = require("../controllers/rekam-medis/rekonsiliasiController");
const DPJP = require("../controllers/rekam-medis/dpjpController");
const NEWS = require("../controllers/rekam-medis/newsController");
const RingkasanPasienPulang = require("../controllers/rekam-medis/ringkasanPasienPulangConroller");

const Router = require("express");
const protect = require("../middlewares/protect");

const router = Router();

// Setting up multer as a middleware to grab photo uploads
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });

router.get("/", protect, InformasiPasien.getRekamMedis);

// Log
router.post("/log", protect, Log.createLog);
router.put("/log/:id", protect, Log.updateLog);
router.get("/log-norm/:id", protect, Log.getLogByNoRM);
router.get("/log-id/:id", protect, Log.getLogByID);

// History RM Pasien
router.post("/riwayat", protect, InformasiPasien.getRiwayatPasien);

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

// Asesmen Medis Rawat Inap
router.post("/asesmen-medis-rawat-inap", protect, AsesmenMedisRawatInap.createAsesmenMedisRawatInap);
router.put("/asesmen-medis-rawat-inap/:id", protect, AsesmenMedisRawatInap.updateAsesmenMedisRawatInap);
router.get("/asesmen-medis-rawat-inap-norm/:id", protect, AsesmenMedisRawatInap.getAsesmenMedisRawatInapByNoRM);
router.get("/asesmen-medis-rawat-inap-id/:id", protect, AsesmenMedisRawatInap.getAsesmenMedisRawatInapByID);

// Edukasi Pasien
router.post("/edukasi-pasien", protect, EdukasiPasien.createEdukasiPasien);
router.put("/edukasi-pasien/:id", protect, EdukasiPasien.updateEdukasiPasien);
router.get("/edukasi-pasien-norm/:id", protect, EdukasiPasien.getEdukasiPasienByNoRM);
router.get("/edukasi-pasien-id/:id", protect, EdukasiPasien.getEdukasiPasienByID);
router.post("/edukasi-pasien-upload-file/:id", [upload.single("file"), protect], EdukasiPasien.uploadFileEdukasiPasien);

// Hasil Pemeriksaan
router.post("/hasil-pemeriksaan", protect, HasilPemeriksaan.createHasilPemeriksaan);
router.delete("/hasil-pemeriksaan/:id", protect, HasilPemeriksaan.deleteHasilPemeriksaan);
router.get("/hasil-pemeriksaan-norm/:id", protect, HasilPemeriksaan.getHasilPemeriksaanByNoRM);
router.get("/hasil-pemeriksaan-id/:id", protect, HasilPemeriksaan.getHasilPemeriksaanByID);
router.post("/hasil-pemeriksaan-upload-file/:id", [upload.single("file"), protect], HasilPemeriksaan.uploadFileHasilPemeriksaan);

// KopiResep
router.post("/kopi-resep", protect, KopiResep.createKopiResep);
router.delete("/kopi-resep/:id", protect, KopiResep.deleteKopiResep);
router.get("/kopi-resep-norm/:id", protect, KopiResep.getKopiResepByNoRM);
router.get("/kopi-resep-id/:id", protect, KopiResep.getKopiResepByID);
router.post("/kopi-resep-upload-file/:id", [upload.single("file"), protect], KopiResep.uploadFileKopiResep);

// Transfer Pasien Internal
router.post("/transfer-pasien-internal", protect, TransferPasienInternal.createTransferPasienInternal);
router.put("/transfer-pasien-internal/:id", protect, TransferPasienInternal.updateTransferPasienInternal);
router.get("/transfer-pasien-internal-norm/:id", protect, TransferPasienInternal.getTransferPasienInternalByNoRM);
router.get("/transfer-pasien-internal-id/:id", protect, TransferPasienInternal.getTransferPasienInternalByID);


// Catatan Perkembangan Pasien Terintegrasi
router.post("/catatan-perkembangan", protect, CatatanPerkembangan.createCatatanPerkembangan);
router.put("/catatan-perkembangan/:id", protect, CatatanPerkembangan.updateCatatanPerkembangan);
router.get("/catatan-perkembangan-norm/:id", protect, CatatanPerkembangan.getCatatanPerkembanganByNoRM);
router.get("/catatan-perkembangan-id/:id", protect, CatatanPerkembangan.getCatatanPerkembanganByID);
router.delete("/catatan-perkembangan/:id", protect, CatatanPerkembangan.deleteCatatanPerkembangan);

// Catatan Keperawatan
router.post("/catatan-keperawatan", protect, CatatanKeperawatan.createCatatanKeperawatan);
router.put("/catatan-keperawatan/:id", protect, CatatanKeperawatan.updateCatatanKeperawatan);
router.get("/catatan-keperawatan-norm/:id", protect, CatatanKeperawatan.getCatatanKeperawatanByNoRM);
router.get("/catatan-keperawatan-id/:id", protect, CatatanKeperawatan.getCatatanKeperawatanByID);
router.delete("/catatan-keperawatan/:id", protect, CatatanKeperawatan.deleteCatatanKeperawatan);

// Observasi Cairan
router.post("/observasi-cairan", protect, ObservasiCairan.createObservasiCairan);
router.put("/observasi-cairan/:id", protect, ObservasiCairan.updateObservasiCairan);
router.get("/observasi-cairan-norm/:id", protect, ObservasiCairan.getObservasiCairanByNoRM);
router.get("/observasi-cairan-id/:id", protect, ObservasiCairan.getObservasiCairanByID);
router.delete("/observasi-cairan/:id", protect, ObservasiCairan.deleteObservasiCairan);

// Pemberian Obat
router.post("/pemberian-obat", protect, PemberianObat.createPemberianObat);
router.put("/pemberian-obat/:id", protect, PemberianObat.updatePemberianObat);
router.get("/pemberian-obat-norm/:id", protect, PemberianObat.getPemberianObatByNoRM);
router.get("/pemberian-obat-id/:id", protect, PemberianObat.getPemberianObatByID);
router.delete("/pemberian-obat/:id", protect, PemberianObat.deletePemberianObat);

// Rekonsiliasi
router.post("/rekonsiliasi", protect, Rekonsiliasi.createRekonsiliasi);
router.put("/rekonsiliasi/:id", protect, Rekonsiliasi.updateRekonsiliasi);
router.get("/rekonsiliasi-norm/:id", protect, Rekonsiliasi.getRekonsiliasiByNoRM);
router.get("/rekonsiliasi-id/:id", protect, Rekonsiliasi.getRekonsiliasiByID);
router.delete("/rekonsiliasi/:id", protect, Rekonsiliasi.deleteRekonsiliasi);

// DPJP
router.post("/pengajuan-dpjp", protect, DPJP.createPengajuanDPJP);
router.post("/dpjp", protect, DPJP.createDPJP);
router.put("/pengajuan-dpjp/:id", protect, DPJP.updatePengajuanDPJP);
router.put("/dpjp/:id", protect, DPJP.updateDPJP);
router.delete("/pengajuan-dpjp/:id", protect, DPJP.deletePengajuanDPJP);
router.delete("/dpjp/:id", protect, DPJP.deleteDPJP);
router.get("/pengajuan-dpjp-norm/:id", protect, DPJP.getPengajuanDPJPByNoRM);
router.get("/pengajuan-dpjp-id/:id", protect, DPJP.getPengajuanDPJPByID);
router.get("/dpjp-norm/:id", protect, DPJP.getDPJPByNoRM);
router.get("/dpjp-id/:id", protect, DPJP.getDPJPByID);
router.get("/dpjp-id-dokter/:id", protect, DPJP.getDPJPByIDDokter);

// NEWS
router.post("/news", protect, NEWS.createNEWS);
router.put("/news/:id", protect, NEWS.updateNEWS);
router.get("/news-norm/:id", protect, NEWS.getNEWSByNoRM);
router.get("/news-id/:id", protect, NEWS.getNEWSByID);

// Ringkasan Pasien Pulang
router.post("/ringkasan-pasien-pulang", protect, RingkasanPasienPulang.createRingkasanPasienPulang);
router.put("/ringkasan-pasien-pulang/:id", protect, RingkasanPasienPulang.updateRingkasanPasienPulang);
router.get("/ringkasan-pasien-pulang-norm/:id", protect, RingkasanPasienPulang.getRingkasanPasienPulangByNoRM);
router.get("/ringkasan-pasien-pulang-id/:id", protect, RingkasanPasienPulang.getRingkasanPasienPulangByID);

module.exports = router;
