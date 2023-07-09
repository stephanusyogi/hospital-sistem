import { BACKEND_API } from '$env/static/private';
import { fail, redirect } from '@sveltejs/kit';
import axios from 'axios';

export const actions = {
  default: async ({request, cookies, params}) => {
    const formData = await request.formData()
    const no_rm = params.slug
    const user_cookies = JSON.parse(cookies.get('user_data_access'));

    const config = {
      headers: {
        'Accept': '*/*',
        'Authorization': 'Bearer '+user_cookies.token,
        'Content-Type': 'application/json'
      }
    };

    const data = {
      no_rekam_medis: no_rm, 
      catatan: formData.get('catatan'), 
      perawat: user_cookies.name, 
    }

    try {
      let dataLog = {
        'no_rekam_medis': no_rm,
        'keterangan': 'Menambahkan catatan keperawatan pasien.',
        'nama': user_cookies.name,
        'role': user_cookies.role,
      }
      await axios.post(BACKEND_API+'/rekam-medis/log', dataLog ,config);

    await axios.post(BACKEND_API+'/rekam-medis/catatan-keperawatan', data, config)  
      
    } catch (error) {
      console.log(error)
      return fail(400, {
        error: true,
        message: error.response.data.message,
      }); 
    }
    
    throw redirect(303, `/rekam-medis/${no_rm}/catatan-keperawatan`)
  }
};