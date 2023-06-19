const AsesmenMedisAwal = require("../../models/rekam_medis_asesmen_medis_awal");


const createAsesmenMedisAwal = async (req, res) => {
  try {
    const data = req.body;

    const existingData = await AsesmenMedisAwal.findOne({ $or: [{ no_rekam_medis: data.no_rekam_medis, status_pulang: false }] });

    if (existingData) {
      throw new Error("Data already exist!");
    }

    const newData = new AsesmenMedisAwal({
      status_pulang: false,
      no_rekam_medis: data.no_rekam_medis,
      anamnesa: {
        keluhan_utama: data.anamnesa.keluhan_utama,
        riwayat_penyakit_sekarang: data.anamnesa.riwayat_penyakit_sekarang,
        riwayat_penyakit_keluarga: data.anamnesa.riwayat_penyakit_keluarga,
        riwayat_pengobatan: data.anamnesa.riwayat_pengobatan,
        riwayat_alergi: data.anamnesa.riwayat_alergi
      },
      pemeriksaan_fisik: {
        keadaan_umum: data.pemeriksaan_fisik.keadaan_umum,
        kepala_leher: data.pemeriksaan_fisik.kepala_leher,
        ekstremitas: data.pemeriksaan_fisik.ekstremitas,
        genitalia: data.pemeriksaan_fisik.genitalia,
        kesadaran: data.pemeriksaan_fisik.kesadaran,
        gcs: data.pemeriksaan_fisik.gcs,
        status_gizi: data.pemeriksaan_fisik.status_gizi,
        bb: data.pemeriksaan_fisik.bb,
        thorax_cor: data.pemeriksaan_fisik.thorax_cor,
        thorax_pulmo: data.pemeriksaan_fisik.thorax_pulmo,
        abdomen_inspeksi: data.pemeriksaan_fisik.abdomen_inspeksi,
        abdomen_palpasi: data.pemeriksaan_fisik.abdomen_palpasi,
        abdomen_auskultasi: data.pemeriksaan_fisik.abdomen_auskultasi,
        abdomen_perkusi: data.pemeriksaan_fisik.abdomen_perkusi,
        vital_sign_tensi: data.pemeriksaan_fisik.vital_sign_tensi,
        vital_sign_nadi: data.pemeriksaan_fisik.vital_sign_nadi,
        vital_sign_suhu: data.pemeriksaan_fisik.vital_sign_suhu,
        vital_sign_rr: data.pemeriksaan_fisik.vital_sign_rr
      },
      pemeriksaan_penunjang: {
        laboratorium: data.pemeriksaan_penunjang.laboratorium,
        radiologi: data.pemeriksaan_penunjang.radiologi,
        lain_lain: data.pemeriksaan_penunjang.lain_lain
      },
      masalah: data.masalah,
      diagnosis: data.diagnosis,
      rencana_asuhan_pemeriksaan_penunjang: {
        uraian_rencana_asuhan: data.rencana_asuhan_pemeriksaan_penunjang.uraian_rencana_asuhan,
        terapi: data.rencana_asuhan_pemeriksaan_penunjang.terapi,
        tindakan: data.rencana_asuhan_pemeriksaan_penunjang.tindakan,
        nutrisi: data.rencana_asuhan_pemeriksaan_penunjang.nutrisi,
        konsultasi: data.rencana_asuhan_pemeriksaan_penunjang.konsultasi
      },
      unit_asal_rujukan: data.unit_asal_rujukan,
      sasaran: data.sasaran,
      rencana_monitoring: data.rencana_monitoring,
      efek_samping: data.efek_samping,
      prognosa: data.prognosa,
      pengkajian_rencana_pemulangan_pasien: {
        usia_lanjut: data.pengkajian_rencana_pemulangan_pasien.usia_lanjut,
        hambatan_mobilitasi: data.pengkajian_rencana_pemulangan_pasien.hambatan_mobilitasi,
        membutuhkan_perawatan_lanjutan: data.pengkajian_rencana_pemulangan_pasien.membutuhkan_perawatan_lanjutan,
        ketergantungan_orang_lain: data.pengkajian_rencana_pemulangan_pasien.ketergantungan_orang_lain
      }
    });

    const savedData = await newData.save();
    res
      .status(200)
      .send({ message: "Data created successfully", data: savedData });

  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
const getAsesmenMedisAwalByNoRM = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await AsesmenMedisAwal.find({no_rekam_medis: id, status_pulang: false});

    if (!data) {
      throw new Error("Data not found!");
    }

    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
const getAsesmenMedisAwalByID = async (req, res) => {
  try {
    const { id } = req.params;
    
    const data = await AsesmenMedisAwal.findById(id);

    if (!data) {
      throw new Error("Data not found!");
    }

    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
const updateAsesmenMedisAwal = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedFields = req.body;

    const updatedData = await AsesmenMedisAwal.findByIdAndUpdate(id, updatedFields, {
      new: true,
    });

    res.status(200).send({ data: updatedData });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = {
  createAsesmenMedisAwal,
  getAsesmenMedisAwalByNoRM,
  getAsesmenMedisAwalByID,
  updateAsesmenMedisAwal
};