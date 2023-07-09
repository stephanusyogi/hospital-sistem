import { BACKEND_API } from '$env/static/private';
import { fail, redirect } from '@sveltejs/kit';
import axios from 'axios';

/** @type {import('./$types').PageLoad} */
export const load = (async ({ cookies, params }) => {
  const user_cookies = JSON.parse(cookies.get('user_data_access'));
  const no_rm = params.slug
  const id_transfer_pasien_internal = params.id_transfer_pasien_internal
  
  if (no_rm === id_transfer_pasien_internal) {
    return {
      user_data: user_cookies,
      transfer_pasien_internal: [],
    };
  } else {
    const headers = {
      'Accept': '*/*',
      'Authorization': 'Bearer '+user_cookies.token
    };
  
  
    const transferPasienInternal = await axios.get(BACKEND_API+'/rekam-medis/transfer-pasien-internal-norm/'+no_rm, { headers })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return []
    });
    return {
      user_data: user_cookies,
      transfer_pasien_internal: transferPasienInternal,
    };
  }
});


export const actions = {
  default: async ({request, cookies, params}) => {
    const formData = await request.formData()
    const no_rm = params.slug
    const id_transfer_pasien_internal = params.id_transfer_pasien_internal
    const user_cookies = JSON.parse(cookies.get('user_data_access'));

    const formValues = {};
    for (const [name, value] of formData.entries()) {
      formValues[name] = value;
    }

    const data = {
      no_rekam_medis: no_rm,
      general: formValues,
    }

    const config = {
      headers: {
        'Accept': '*/*',
        'Authorization': 'Bearer '+user_cookies.token,
        'Content-Type': 'application/json'
      }
    };

    if (no_rm === id_transfer_pasien_internal) {
      try {
        let dataLog = {
          'no_rekam_medis': no_rm,
          'keterangan': 'Mengisi transfer pasien internal.',
          'nama': user_cookies.name,
          'role': user_cookies.role,
        }
        await axios.post(BACKEND_API+'/rekam-medis/log', dataLog ,config);

        await axios.post(BACKEND_API+'/rekam-medis/transfer-pasien-internal', data, config)  
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
          'keterangan': 'Mengisi transfer pasien internal.',
          'nama': user_cookies.name,
          'role': user_cookies.role,
        }
        await axios.post(BACKEND_API+'/rekam-medis/log', dataLog ,config);

        await axios.put(BACKEND_API+'/rekam-medis/transfer-pasien-internal/'+id_transfer_pasien_internal, data, config)  
      } catch (error) {
        console.log(error)
        return fail(400, {
          error: true,
          message: error.response.data.message,
        }); 
      }
    }
    
    throw redirect(303, `/rekam-medis/${no_rm}/transfer-pasien-internal`)
  }
};