import { BACKEND_API } from '$env/static/private';
import axios from 'axios';

/** @type {import('./$types').PageLoad} */
export const load = (async ({ cookies, params }) => {
  const user_cookies = JSON.parse(cookies.get('user_data_access'));
  const no_rm = params.slug

  const headers = {
    'Accept': '*/*',
    'Authorization': 'Bearer '+user_cookies.token
  };

  try {
    const response = await axios.get(BACKEND_API+'/rekam-medis/informasi-pasien-norm/'+no_rm, { headers });
    const informasi_pasien = response.data[0];
    
    return {
      user_data: user_cookies,
      informasi_pasien: informasi_pasien ? response.data[0] : response.data,
    }; 
  } catch (error) {
    return {
      user_data: user_cookies,
      informasi_pasien: [],
      error: error.response.data
    };
  }
});