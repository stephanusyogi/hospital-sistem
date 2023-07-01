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
    const response = await axios.get(BACKEND_API+'/rekam-medis/log-norm/'+no_rm, { headers });
    const logs = response.data;
    
    return {
      user_data: user_cookies,
      logs: logs,
    }; 
  } catch (error) {
    return {
      user_data: user_cookies,
      logs: [],
      error: error.response.data
    };
  }
});