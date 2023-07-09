import { BACKEND_API } from '$env/static/private';
import { fail, redirect } from '@sveltejs/kit';
import axios from 'axios';

/** @type {import('./$types').PageLoad} */
export const load = (async ({ cookies, params }) => {
  const user_cookies = JSON.parse(cookies.get('user_data_access'));
  const no_rm = params.slug
  const id_ringkasan_pasien_pulang = params.id_ringkasan_pasien_pulang
  
  if (no_rm === id_ringkasan_pasien_pulang) {
    return {
      user_data: user_cookies,
      ringkasan_pasien_pulang: [],
    };
  } else {
    const headers = {
      'Accept': '*/*',
      'Authorization': 'Bearer '+user_cookies.token
    };
  
  
    const ringkasan_pasien_pulang = await axios.get(BACKEND_API+'/rekam-medis/ringkasan-pasien-pulang-norm/'+no_rm, { headers })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return []
    });
  
    return {
      user_data: user_cookies,
      ringkasan_pasien_pulang: ringkasan_pasien_pulang,
    };
  }
});


export const actions = {
  default: async ({request, cookies, params}) => {
    const formData = await request.formData()
    const no_rm = params.slug
    const id_ringkasan_pasien_pulang = params.id_ringkasan_pasien_pulang
    const user_cookies = JSON.parse(cookies.get('user_data_access'));
    
    
    const formValues = {};
    for (const [name, value] of formData.entries()) {
      formValues[name] = value;
    }

    const data = {
      no_rekam_medis: no_rm, 
      ...formValues
    }
    
    const config = {
      headers: {
        'Accept': '*/*',
        'Authorization': 'Bearer '+user_cookies.token,
        'Content-Type': 'application/json'
      }
    };

    if (no_rm === id_ringkasan_pasien_pulang) {
      try {
        let dataLog = {
          'no_rekam_medis': no_rm,
          'keterangan': 'Mengisi NEWS.',
          'nama': user_cookies.name,
          'role': user_cookies.role,
        }
        await axios.post(BACKEND_API+'/rekam-medis/log', dataLog ,config);

        await axios.post(BACKEND_API+'/rekam-medis/ringkasan-pasien-pulang', data, config)  
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
          'keterangan': 'Mengisi NEWS',
          'nama': user_cookies.name,
          'role': user_cookies.role,
        }
        await axios.post(BACKEND_API+'/rekam-medis/log', dataLog ,config);

        await axios.put(BACKEND_API+'/rekam-medis/ringkasan-pasien-pulang/'+id_ringkasan_pasien_pulang, data, config)  
      } catch (error) {
        console.log(error)
        return fail(400, {
          error: true,
          message: error.response.data.message,
        }); 
      }
    }
    
    throw redirect(303, `/rekam-medis/${no_rm}/ringkasan-pasien-pulang`)
  }
};