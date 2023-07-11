import { BACKEND_API } from '$env/static/private';
import { fail, redirect } from '@sveltejs/kit';
import axios from 'axios';
import { writeFile } from 'fs/promises';

export const actions = {
  default: async ({request, cookies, params}) => {
    const formData = await request.formData()
    const no_rm = params.slug
    const user_cookies = JSON.parse(cookies.get('user_data_access'));
    
    const data = {
      no_rekam_medis: no_rm,
      uraian: formData.get(`uraian`),
      file_dir:'',
    };

    
    const config = {
      headers: {
        'Accept': '*/*',
        'Authorization': 'Bearer '+user_cookies.token,
        'Content-Type': 'application/json'
      }
    };
    const configFile = {
      headers: {
        'Accept': '*/*',
        'Authorization': 'Bearer '+user_cookies.token,
        'Content-Type': 'multipart/form-data'
      }
    };
    try {
      let dataLog = {
        'no_rekam_medis': no_rm,
        'keterangan': 'Mengupload hasil pemeriksaan pasien.',
        'nama': user_cookies.name,
        'role': user_cookies.role,
      }
      
      
      
      const promises = await Promise.all([
        axios.post(BACKEND_API+'/rekam-medis/log', dataLog ,config),
        axios.post(BACKEND_API+'/rekam-medis/hasil-pemeriksaan', data, config),
      ])
      
      

      // let resHasilPemeriksaan = await axios.post(BACKEND_API+'/rekam-medis/hasil-pemeriksaan', data, config)  
      
      // Upload File
       const file_dir = formData.get(`file_dir`);
       const id_new_record = promises[1].data.data._id
       const formFile = new FormData();
      formFile.append('file', file_dir);
      axios.post(BACKEND_API+'/rekam-medis/hasil-pemeriksaan-upload-file/'+id_new_record, formFile ,configFile);
    } catch (error) {
      console.log(error)
      return fail(400, {
        error: true,
        message: error.response.data.message,
      }); 
    }
    
    throw redirect(303, `/rekam-medis/${no_rm}/hasil-pemeriksaan-penunjang`)
  }
};