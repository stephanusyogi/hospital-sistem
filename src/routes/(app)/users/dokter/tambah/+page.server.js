import { BACKEND_API } from '$env/static/private';
import { fail, redirect } from '@sveltejs/kit';
import axios from 'axios';


export const actions = {
  default: async ({request, cookies, params}) => {
    const formData = await request.formData()
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

    try {
      await axios.post(BACKEND_API+'/doctor', formValues, config)  
      
    } catch (error) {
      console.log(error)
      return fail(400, {
        error: true,
        message: error.response.data.message,
      }); 
    }
    
    throw redirect(303, `/users/dokter`)
  }
};