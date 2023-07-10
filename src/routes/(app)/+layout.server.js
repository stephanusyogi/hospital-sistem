import { BACKEND_API } from '$env/static/private';
import axios from 'axios';

/** @type {import('./$types').LayoutServerLoad} */
export const load = (async ({ cookies }) => {
  const user_cookies = JSON.parse(cookies.get('user_data_access'));

  if(user_cookies.role === "Dokter"){
    const headers = {
      'Accept': '*/*',
      'Authorization': 'Bearer '+user_cookies.token
    };
  
    const countPengajuan = await axios.get(BACKEND_API+'/rekam-medis/dpjp-id-dokter/'+user_cookies._id, { headers })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return []
      });
    return {
      user_data: user_cookies,
      api_base: BACKEND_API,
      count_pengajuan: countPengajuan.length
    };
  }else{
    return {
      user_data: user_cookies,
      api_base: BACKEND_API,
    };
  }
}) 