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

  const pemeriksaanAwal = await axios.get(BACKEND_API+'/rekam-medis/pemeriksaan-awal-norm/'+no_rm, { headers })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return []
    });
  return {
    user_data: user_cookies,
    pemeriksaan_awal: pemeriksaanAwal,
  }; 
});