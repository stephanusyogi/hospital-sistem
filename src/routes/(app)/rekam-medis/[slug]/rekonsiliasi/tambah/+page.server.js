import { BACKEND_API } from '$env/static/private';
import { fail, redirect } from '@sveltejs/kit';
import axios from 'axios';

/** @type {import('./$types').PageLoad} */
export const load = (async ({ cookies, params }) => {
  const user_cookies = JSON.parse(cookies.get('user_data_access'));
  const no_rm = params.slug

  const headers = {
    'Accept': '*/*',
    'Authorization': 'Bearer '+user_cookies.token
  };

  const rekonsiliasi = await axios.get(BACKEND_API+'/rekam-medis/rekonsiliasi-norm/'+no_rm, { headers })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return []
    });
    
  const dataObat = await axios.get(BACKEND_API+'/drug', { headers })
  .then((response) => {
    return response.data;
  })
  .catch((error) => {
    return []
  });
  return {
    user_data: user_cookies,
    rekonsiliasi: rekonsiliasi,
    obat: dataObat
  }; 
});

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
    
    const formValues = {};
    for (const [name, value] of formData.entries()) {
      formValues[name] = value;
    }

    const data = {
      no_rekam_medis: no_rm, 
      ...formValues
    }

    try {
      let dataLog = {
        'no_rekam_medis': no_rm,
        'keterangan': 'Mengisi rekonsiliasi.',
        'nama': user_cookies.name,
        'role': user_cookies.role,
      }
      await axios.post(BACKEND_API+'/rekam-medis/log', dataLog ,config);

      await axios.post(BACKEND_API+'/rekam-medis/rekonsiliasi', data, config)  
      
    } catch (error) {
      console.log(error)
      return fail(400, {
        error: true,
        message: error.response.data.message,
      }); 
    }
    
    throw redirect(303, `/rekam-medis/${no_rm}/rekonsiliasi`)
  }
};