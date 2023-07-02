import { BACKEND_API } from '$env/static/private';
import { fail, redirect } from '@sveltejs/kit';
import axios from 'axios';

/** @type {import('./$types').PageLoad} */
export const load = (async ({ cookies, params }) => {
  const user_cookies = JSON.parse(cookies.get('user_data_access'));
  const no_rm = params.slug
  const id_asesmen_medis_awal = params.id_asesmen_medis_awal
  
  if (no_rm === id_asesmen_medis_awal) {
    return {
      user_data: user_cookies,
      asesmen_medis_awal: [],
    };
  } else {
    const headers = {
      'Accept': '*/*',
      'Authorization': 'Bearer '+user_cookies.token
    };
  
  
    const asesmenMedisAwal = await axios.get(BACKEND_API+'/rekam-medis/asesmen-medis-awal-norm/'+no_rm, { headers })
    .then((response) => {
      return response.data.length > 0 ? response.data[0] : response.data;
    })
    .catch((error) => {
      return []
    });
  
    return {
      user_data: user_cookies,
      asesmen_medis_awal: asesmenMedisAwal,
    };
  }
});


export const actions = {
  default: async ({request, cookies, params}) => {
    const formData = await request.formData()
    const no_rm = params.slug
    const id_asesmen_medis_awal = params.id_asesmen_medis_awal
    const user_cookies = JSON.parse(cookies.get('user_data_access'));
    
    // Mengambil nilai dari anamnesa
    const keluhanUtama = formData.get('keluhan_utama');
    const riwayatPenyakitSekarang = formData.get('riwayat_penyakit_sekarang');
    const riwayatPenyakitKeluarga = formData.get('riwayat_penyakit_keluarga');
    const riwayatPengobatan = formData.get('riwayat_pengobatan');
    const riwayatAlergi = formData.get('riwayat_alergi');

    // Mengambil nilai dari pemeriksaan fisik
    const keadaanUmum = formData.get('keadaan_umum');
    const kepalaLeher = formData.get('kepala_leher');
    const ekstremitas = formData.get('ekstremitas');
    const genitalia = formData.get('genitalia');
    const kesadaran = formData.get('kesadaran');
    const gcs = formData.get('gcs');
    const statusGizi = formData.get('status_gizi');
    const bb = formData.get('bb');
    const thoraxCor = formData.get('thorax_cor');
    const thoraxPulmo = formData.get('thorax_pulmo');
    const abdomenInspeksi = formData.get('abdomen_inspeksi');
    const abdomenPalpasi = formData.get('abdomen_palpasi');
    const abdomenAuskultasi = formData.get('abdomen_auskultasi');
    const abdomenPerkusi = formData.get('abdomen_perkusi');
    const vitalSignTensi = formData.get('vital_sign_tensi');
    const vitalSignNadi = formData.get('vital_sign_nadi');
    const vitalSignSuhu = formData.get('vital_sign_suhu');
    const vitalSignRr = formData.get('vital_sign_rr');

    // Mengambil nilai dari pemeriksaan penunjang
    const laboratorium = formData.get('laboratorium');
    const radiologi = formData.get('radiologi');
    const lainLain = formData.get('lain_lain');

    // Mengambil nilai dari rencana asuhan pemeriksaan penunjang
    const uraianRencanaAsuhan = formData.get('uraian_rencana_asuhan');
    const terapi = formData.get('terapi');
    const tindakan = formData.get('tindakan');
    const nutrisi = formData.get('nutrisi');
    const konsultasi = formData.get('konsultasi');

    
    const masalah = formData.get('masalah');
    const diagnosis = formData.get('diagnosis');
    const sasaran = formData.get('sasaran');
    const rencana_monitoring = formData.get('rencana_monitoring');
    const efek_samping = formData.get('efek_samping');
    const prognosa = formData.get('prognosa');

    // Mengambil nilai dari pengkajian rencana pemulangan pasien
    const usiaLanjut = formData.get('usia_lanjut') === 'true';
    const hambatanMobilitasi = formData.get('hambatan_mobilitasi') === 'true';
    const membutuhkanPerawatanLanjutan = formData.get('membutuhkan_perawatan_lanjutan') === 'true';
    const ketergantunganOrangLain = formData.get('ketergantungan_orang_lain') === 'true';

    // Membentuk objek rekam medis berdasarkan nilai-nilai yang diambil
    const data = {
      no_rekam_medis: no_rm,
      anamnesa: {
        keluhan_utama: keluhanUtama,
        riwayat_penyakit_sekarang: riwayatPenyakitSekarang,
        riwayat_penyakit_keluarga: riwayatPenyakitKeluarga,
        riwayat_pengobatan: riwayatPengobatan,
        riwayat_alergi: riwayatAlergi,
      },
      masalah: masalah,
      diagnosis: diagnosis,
      sasaran: sasaran,
      rencana_monitoring: rencana_monitoring,
      efek_samping: efek_samping,
      prognosa: prognosa,
      pemeriksaan_fisik: {
        keadaan_umum: keadaanUmum,
        kepala_leher: kepalaLeher,
        ekstremitas: ekstremitas,
        genitalia: genitalia,
        kesadaran: kesadaran,
        gcs: gcs,
        status_gizi: statusGizi,
        bb: bb,
        thorax_cor: thoraxCor,
        thorax_pulmo: thoraxPulmo,
        abdomen_inspeksi: abdomenInspeksi,
        abdomen_palpasi: abdomenPalpasi,
        abdomen_auskultasi: abdomenAuskultasi,
        abdomen_perkusi: abdomenPerkusi,
        vital_sign_tensi: vitalSignTensi,
        vital_sign_nadi: vitalSignNadi,
        vital_sign_suhu: vitalSignSuhu,
        vital_sign_rr: vitalSignRr,
      },
      pemeriksaan_penunjang: {
        laboratorium: laboratorium,
        radiologi: radiologi,
        lain_lain: lainLain,
      },
      rencana_asuhan_pemeriksaan_penunjang: {
        uraian_rencana_asuhan: uraianRencanaAsuhan,
        terapi: terapi,
        tindakan: tindakan,
        nutrisi: nutrisi,
        konsultasi: konsultasi,
      },
      pengkajian_rencana_pemulangan_pasien: {
        usia_lanjut: usiaLanjut,
        hambatan_mobilitasi: hambatanMobilitasi,
        membutuhkan_perawatan_lanjutan: membutuhkanPerawatanLanjutan,
        ketergantungan_orang_lain: ketergantunganOrangLain,
      },
    };
    
    const config = {
      headers: {
        'Accept': '*/*',
        'Authorization': 'Bearer '+user_cookies.token,
        'Content-Type': 'application/json'
      }
    };

    if (no_rm === id_asesmen_medis_awal) {
      try {
        let dataLog = {
          'no_rekam_medis': no_rm,
          'keterangan': 'Mengisi asesmen medis awal pasien.',
          'nama': user_cookies.name,
          'role': user_cookies.role,
        }
        await axios.post(BACKEND_API+'/rekam-medis/log', dataLog ,config);

        await axios.post(BACKEND_API+'/rekam-medis/asesmen-medis-awal', data, config)  
      } catch (error) {
        console.log(error)
      }
    } else {
      try {
        let dataLog = {
          'no_rekam_medis': no_rm,
          'keterangan': 'Mengisi asesmen medis awal pasien.',
          'nama': user_cookies.name,
          'role': user_cookies.role,
        }
        await axios.post(BACKEND_API+'/rekam-medis/log', dataLog ,config);

        await axios.put(BACKEND_API+'/rekam-medis/asesmen-medis-awal/'+id_asesmen_medis_awal, data, config)  
      } catch (error) {
        console.log(error)
      }
    }
    
    throw redirect(303, `/rekam-medis/${no_rm}/asesmen-medis-awal`)
  }
};