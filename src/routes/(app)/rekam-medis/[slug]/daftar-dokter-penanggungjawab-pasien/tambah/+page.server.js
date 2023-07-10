import { BACKEND_API } from '$env/static/private';
import { fail, redirect } from '@sveltejs/kit';
import axios from 'axios';

/** @type {import('./$types').PageLoad} */
export const load = (async ({ cookies, params }) => {
  const user_cookies = JSON.parse(cookies.get('user_data_access'));
    const headers = {
      'Accept': '*/*',
      'Authorization': 'Bearer '+user_cookies.token
    };
    const doctors = await axios.get(BACKEND_API+'/doctor', { headers })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return []
      });
  
    return {
      user_data: user_cookies,
      dokter: doctors
    };
});


export const actions = {
  default: async ({request, cookies, params}) => {
    const formData = await request.formData()
    const no_rm = params.slug
    const user_cookies = JSON.parse(cookies.get('user_data_access'));
    
    const formValues = {};
    for (const [name, value] of formData.entries()) {
      if(name === 'atas_permintaan_pasien'){
        formValues[name] = true;
      }else{
        formValues[name] = value;
      }
    }

    const config = {
      headers: {
        'Accept': '*/*',
        'Authorization': 'Bearer '+user_cookies.token,
        'Content-Type': 'application/json'
      }
    };

    const responseDokter = await axios.get(BACKEND_API+'/doctor/'+formValues.id_dokter, config);
    const dokter = responseDokter.data

    const data = {
      no_rekam_medis: no_rm,
      ...formValues,
      nama_dokter: dokter.name,
      spesialis: dokter.spesialis,
    }

    try {
      let dataLog = {
        'no_rekam_medis': no_rm,
        'keterangan': 'Mengajukan DPJP.',
        'nama': user_cookies.name,
        'role': user_cookies.role,
      }
      await axios.post(BACKEND_API+'/rekam-medis/log', dataLog ,config);

      await axios.post(BACKEND_API+'/rekam-medis/dpjp', data, config)  
      
    } catch (error) {
      console.log(error)
      return fail(400, {
        error: true,
        message: error.response.data.message,
      }); 
    }
    
    throw redirect(303, `/rekam-medis/${no_rm}/daftar-dokter-penanggungjawab-pasien`)
  }
};
