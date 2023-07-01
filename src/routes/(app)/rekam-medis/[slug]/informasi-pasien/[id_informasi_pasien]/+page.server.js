import { BACKEND_API } from '$env/static/private';
import { fail, redirect } from '@sveltejs/kit';
import axios from 'axios';

/** @type {import('./$types').PageLoad} */
export const load = (async ({ cookies, params }) => {
  const user_cookies = JSON.parse(cookies.get('user_data_access'));
  const no_rm = params.slug

  const headers = {
    'Accept': '*/*',
    'Authorization': 'Bearer '+user_cookies.token
  };


  // const informasiPasien = await axios.get(BACKEND_API+'/rekam-medis/informasi-pasien-norm/'+no_rm, config)
  // .then((response) => {
  //   return response.data[0];
  // })
  // .catch((error) => {
  //   return []
  // });

  // return {
  //   user_data: user_cookies,
  //   informasi_pasien: informasiPasien,
  // };
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

export const actions = {
  default: async ({request, cookies, params}) => {
    const formData = await request.formData()
    const no_rm = params.slug
    const id_informasi_pasien = params.id_informasi_pasien
    const user_cookies = JSON.parse(cookies.get('user_data_access'));
    const formValues = {};
    for (const [name, value] of formData.entries()) {
      if (name === 'status_asuransi') {
        formValues[name] = Boolean(value);
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

    try {
      try {
        let dataLog = {
          'no_rekam_medis': no_rm,
          'keterangan': 'Melakukan update data formulir identitas & informasi pasien.',
          'nama': user_cookies.name,
          'role': user_cookies.role,
        }
        await axios.post(BACKEND_API+'/rekam-medis/log', dataLog ,config);

        await axios.put(BACKEND_API+'/rekam-medis/informasi-pasien/'+id_informasi_pasien, formValues, config)  
      } catch (error) {
        return fail(400, {
          error: true,
          message: error.response.data.message,
        }); 
      }
    } catch (error) {
      console.log(error)
    }
    
    throw redirect(303, `/rekam-medis/${no_rm}/informasi-pasien`)
  }
};
