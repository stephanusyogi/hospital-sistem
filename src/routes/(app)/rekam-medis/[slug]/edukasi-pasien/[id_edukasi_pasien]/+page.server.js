import { BACKEND_API } from '$env/static/private';
import { fail, redirect } from '@sveltejs/kit';
import axios from 'axios';
import { writeFile } from 'fs/promises';

/** @type {import('./$types').PageLoad} */
export const load = (async ({ cookies, params }) => {
  const user_cookies = JSON.parse(cookies.get('user_data_access'));
  const no_rm = params.slug
  const id_edukasi_pasien = params.id_edukasi_pasien
  
  if (no_rm === id_edukasi_pasien) {
    return {
      user_data: user_cookies,
      asesmen_medis_awal: [],
    };
  } else {
    const headers = {
      'Accept': '*/*',
      'Authorization': 'Bearer '+user_cookies.token
    };
  
    const edukasiPasien = await axios.get(BACKEND_API+'/rekam-medis/edukasi-pasien-norm/'+no_rm, { headers })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return []
    });
  
    return {
      user_data: user_cookies,
      edukasi_pasien: edukasiPasien,
    };
  }
});


export const actions = {
  default: async ({request, cookies, params}) => {
    const formData = await request.formData()
    const no_rm = params.slug
    const id_edukasi_pasien = params.id_edukasi_pasien
    const user_cookies = JSON.parse(cookies.get('user_data_access'));
    
    // Mengambil nilai
    const keyakinan_nilai = formData.get(`keyakinan_nilai`);
    const tingkat_edukasi = formData.get(`tingkat_edukasi`);
    const keterbatasan_fisik = formData.get(`keterbatasan_fisik`);
    const bahasa_yang_digunakan = formData.get(`bahasa_yang_digunakan`);
    const hambatan_emosi = formData.get(`hambatan_emosi`);
    const kesediaan_menerima_informasi = formData.get(`kesediaan_menerima_informasi`);
    const diagnosis_masuk = formData.get(`diagnosis_masuk`);
    const rencana_operasi = formData.get(`rencana_operasi`);
    const penerjemah = formData.get(`penerjemah`);
    const perawatan_pendamping = formData.get(`perawatan_pendamping`);
    const asuhan_berkelanjutan = formData.get(`asuhan_berkelanjutan`);
    const media_edukasi = formData.get(`media_edukasi`);
    const img_dir_penandaan_lokasi_operasi = formData.get('img_dir_penandaan_lokasi_operasi');
    
    const data = {
      no_rekam_medis: no_rm,
      pengkajian_kebutuhan_edukasi:{
        keyakinan_nilai: keyakinan_nilai,
        tingkat_edukasi: tingkat_edukasi,
        keterbatasan_fisik: keterbatasan_fisik,
        bahasa_yang_digunakan: bahasa_yang_digunakan,
        hambatan_emosi: hambatan_emosi,
        kesediaan_menerima_informasi: kesediaan_menerima_informasi,
        diagnosis_masuk: diagnosis_masuk,
        rencana_operasi: rencana_operasi,
      },
      kebutuhan_edukasi:{
        penerjemah: penerjemah,
        perawatan_pendamping: perawatan_pendamping,
        asuhan_berkelanjutan: asuhan_berkelanjutan,
        media_edukasi: media_edukasi,
      },
      img_dir_penandaan_lokasi_operasi:''
    };

    
    const config = {
      headers: {
        'Accept': '*/*',
        'Authorization': 'Bearer '+user_cookies.token,
        'Content-Type': 'application/json'
      }
    };
    const configFile = {
      headers: {
        'Accept': '*/*',
        'Authorization': 'Bearer '+user_cookies.token,
        'Content-Type': 'multipart/form-data'
      }
    };

    if (no_rm === id_edukasi_pasien) {
      try {
        let dataLog = {
          'no_rekam_medis': no_rm,
          'keterangan': 'Mengisi edukasi pasien.',
          'nama': user_cookies.name,
          'role': user_cookies.role,
        }
        await axios.post(BACKEND_API+'/rekam-medis/log', dataLog ,config);

        let resEdukasiPasien = await axios.post(BACKEND_API+'/rekam-medis/edukasi-pasien', data, config)  
        // Upload File
        const id_new_record = resEdukasiPasien.data.data._id
        const formFile = new FormData();
        formFile.append('file', img_dir_penandaan_lokasi_operasi);
        axios.post(BACKEND_API+'/rekam-medis/edukasi-pasien-upload-file/'+id_new_record, formFile ,configFile);
      } catch (error) {
        console.log(error)
        return fail(400, {
          error: true,
          message: error.response.data.message,
        }); 
      }
    } else {
      try {
        let dataLog = {
          'no_rekam_medis': no_rm,
          'keterangan': 'Mengisi edukasi pasien.',
          'nama': user_cookies.name,
          'role': user_cookies.role,
        }
      
        const promises = await Promise.all([
          axios.post(BACKEND_API+'/rekam-medis/log', dataLog ,config),
          axios.post(BACKEND_API+'/rekam-medis/log', dataLog ,config)
        ])

        await axios.put(BACKEND_API+'/rekam-medis/edukasi-pasien/'+id_edukasi_pasien, data, config)  
        const formFile = new FormData();
        formFile.append('file', img_dir_penandaan_lokasi_operasi);
        axios.post(BACKEND_API+'/rekam-medis/edukasi-pasien-upload-file/'+id_edukasi_pasien, formFile ,configFile);

      } catch (error) {
        console.log(error)
        return fail(400, {
          error: true,
          message: error.response.data.message,
        }); 
      }
    }
    
    throw redirect(303, `/rekam-medis/${no_rm}/edukasi-pasien`)
  }
};