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

  const transferPasienInternal = await axios.get(BACKEND_API+'/rekam-medis/transfer-pasien-internal-norm/'+no_rm, { headers })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return []
    });
  // console.log(transferPasienInternal)
  return {
    user_data: user_cookies,
    transfer_pasien_internal: transferPasienInternal,
  }; 
});