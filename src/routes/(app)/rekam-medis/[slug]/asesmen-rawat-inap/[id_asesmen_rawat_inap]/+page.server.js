import { BACKEND_API } from '$env/static/private';
import { fail, redirect } from '@sveltejs/kit';
import axios from 'axios';

/** @type {import('./$types').PageLoad} */
export const load = (async ({ cookies, params }) => {
  const user_cookies = JSON.parse(cookies.get('user_data_access'));
  const no_rm = params.slug
  const id_asesmen_rawat_inap = params.id_asesmen_rawat_inap
  
  if (no_rm === id_asesmen_rawat_inap) {
    return {
      user_data: user_cookies,
      asesmen_rawat_inap: [],
    };
  } else {
    const headers = {
      'Accept': '*/*',
      'Authorization': 'Bearer '+user_cookies.token
    };
  
  
    const asesmenRawatInap = await axios.get(BACKEND_API+'/rekam-medis/asesmen-medis-rawat-inap-norm/'+no_rm, { headers })
    .then((response) => {
      return response.data.length > 0 ? response.data[0] : response.data;
    })
    .catch((error) => {
      return []
    });
  
    return {
      user_data: user_cookies,
      asesmen_rawat_inap: asesmenRawatInap,
    };
  }
});


export const actions = {
  default: async ({request, cookies, params}) => {
    const formData = await request.formData()
    const no_rm = params.slug
    const id_asesmen_rawat_inap = params.id_asesmen_rawat_inap
    const user_cookies = JSON.parse(cookies.get('user_data_access'));
    
    

    // Membentuk objek rekam medis berdasarkan nilai-nilai yang diambil
    const data = {
      no_rekam_medis: no_rm,
    };
    
    const config = {
      headers: {
        'Accept': '*/*',
        'Authorization': 'Bearer '+user_cookies.token,
        'Content-Type': 'application/json'
      }
    };

    if (no_rm === id_asesmen_rawat_inap) {
      try {
        let dataLog = {
          'no_rekam_medis': no_rm,
          'keterangan': 'Mengisi asesmen rawat inap pasien.',
          'nama': user_cookies.name,
          'role': user_cookies.role,
        }
        await axios.post(BACKEND_API+'/rekam-medis/log', dataLog ,config);

        await axios.post(BACKEND_API+'/rekam-medis/asesmen-medis-rawat-inap', data, config)  
      } catch (error) {
        console.log(error)
      }
    } else {
      try {
        let dataLog = {
          'no_rekam_medis': no_rm,
          'keterangan': 'Mengisi asesmen rawat inap pasien.',
          'nama': user_cookies.name,
          'role': user_cookies.role,
        }
        await axios.post(BACKEND_API+'/rekam-medis/log', dataLog ,config);

        await axios.put(BACKEND_API+'/rekam-medis/asesmen-medis-rawat-inap/'+id_asesmen_rawat_inap, data, config)  
      } catch (error) {
        console.log(error)
      }
    }
    
    throw redirect(303, `/rekam-medis/${no_rm}/asesmen-rawat-inap`)
  }
};