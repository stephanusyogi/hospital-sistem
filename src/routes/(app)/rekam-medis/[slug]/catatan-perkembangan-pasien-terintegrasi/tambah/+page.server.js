import { BACKEND_API } from '$env/static/private';
import { fail, redirect } from '@sveltejs/kit';
import axios from 'axios';
import { writeFile } from 'fs/promises';

export const actions = {
  default: async ({request, cookies, params}) => {
    const formData = await request.formData()
    const no_rm = params.slug
    const user_cookies = JSON.parse(cookies.get('user_data_access'));

    const formValues = {};
    for (const [name, value] of formData.entries()) {
      formValues[name] = value;
    }

    const config = {
      headers: {
        'Accept': '*/*',
        'Authorization': 'Bearer '+user_cookies.token,
        'Content-Type': 'application/json'
      }
    };
    let data = {}
    if(user_cookies.role === 'Dokter'){
      data = {
        no_rekam_medis: no_rm,
        visitasi_dokter: true,
        verifikasi_dpjp: user_cookies.name,
        ...formValues,
        ppa: user_cookies.name,
        identitas_ppa: user_cookies.role,
      };

      // Update Receipt
      let updatedReceipt = {}
      const receipt =  await axios.get(BACKEND_API+'/receipt-norm/'+no_rm, config)
      let res_visit_dokter = receipt.data[0].visit_dokter
        if(res_visit_dokter.length !== 0){
          updatedReceipt = {
            visit_dokter:[
              ...res_visit_dokter,
              {
                deskripsi: user_cookies.name,
                tanggal: new Date().toISOString().split("T")[0],
                harga_satuan: '100000',
                quantity:1
              }
            ]
          }
        }else{
          updatedReceipt = {
            visit_dokter:{
              deskripsi: user_cookies.name,
              tanggal: new Date().toISOString().split("T")[0],
              harga_satuan: '100000',
              quantity:1
            }
          }
        }
        await axios.put(BACKEND_API+'/receipt-norm/'+no_rm, updatedReceipt , config);
    }else{
      data = {
        no_rekam_medis: no_rm,
        visitasi_dokter: false,
        verifikasi_dpjp: '',
        ...formValues,
        ppa: user_cookies.name,
        identitas_ppa: user_cookies.role,
      };
    }

    try {
      let dataLog = {
        'no_rekam_medis': no_rm,
        'keterangan': 'Menambahkan catatan perkembangan pasien.',
        'nama': user_cookies.name,
        'role': user_cookies.role,
      }
      await axios.post(BACKEND_API+'/rekam-medis/log', dataLog ,config);

    await axios.post(BACKEND_API+'/rekam-medis/catatan-perkembangan', data, config)  
      
    } catch (error) {
      console.log(error)
      return fail(400, {
        error: true,
        message: error.response.data.message,
      }); 
    }
    
    throw redirect(303, `/rekam-medis/${no_rm}/catatan-perkembangan-pasien-terintegrasi`)
  }
};