import { fail } from '@sveltejs/kit';
import { BACKEND_API } from '$env/static/private';
import axios from 'axios';

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({request, cookies}) => {
    const formData = await request.formData()
    const user_cookies = JSON.parse(cookies.get('user_data_access'));
    const formValues = {};
    for (const [name, value] of formData.entries()) {
      formValues[name] = value;
    }
    const hasEmptyFields = Object.values(formValues).some(value => value === '');
    if (hasEmptyFields) {
      return fail(400, {
        error: true,
        message: `Formulir tidak lengkap, mohon periksa kembali!`,
        data: formValues
      });
    }
    const config = {
      headers: {
        'Accept': '*/*',
        'Authorization': 'Bearer '+user_cookies.token,
        'Content-Type': 'application/json'
      }
    };

    axios.post(BACKEND_API+'/patient', formValues, config)
      .catch(error => {
        console.error(error);
      });

    return {
      success: true,
      message: `Pasien Baru Berhasil Didaftarkan!`,
      data: formValues
    }
  }
};