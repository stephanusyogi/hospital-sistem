import { fail, redirect } from '@sveltejs/kit'
import axios from 'axios';
import { BACKEND_API } from '$env/static/private';

export function load() {
  throw redirect(302, '/')
}

export const actions = {
  default: async ({request, cookies, params}) => {
    const no_rekam_medis = params.no_rekam_medis
    const user_cookies = JSON.parse(cookies.get('user_data_access'));

    const config = {
      headers: {
        'Accept': '*/*',
        'Authorization': 'Bearer '+user_cookies.token,
        'Content-Type': 'application/json'
      }
    };
    try {
      await axios.put(BACKEND_API+'/rekam-medis/pasien-pulang/'+no_rekam_medis, config)  
    } catch (error) {
      console.log(error)
      return fail(400, {
        error: true,
        message: error.response,
      }); 
    }

    // redirect the user
    throw redirect(302, '/')
  }
};