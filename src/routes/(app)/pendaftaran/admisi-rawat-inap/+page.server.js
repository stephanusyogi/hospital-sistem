import { BACKEND_API } from '$env/static/private';
import axios from 'axios';

/** @type {import('./$types').PageLoad} */
export const load = (async ({ cookies }) => {
  const user_cookies = JSON.parse(cookies.get('user_data_access'));
  const headers = {
    'Accept': '*/*',
    'Authorization': 'Bearer '+user_cookies.token
  };

  try {
    const response = await axios.get(BACKEND_API+'/rekam-medis/antrean-pasien', { headers });
    const patients = response.data;
    
    return {
      user_data: user_cookies,
      patients: patients
    };
  } catch (error) {
    return {
      user_data: user_cookies,
      patients: [],
      error: error.response.data,
    };
  }
});