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

  const pemberianObat = await axios.get(BACKEND_API+'/rekam-medis/pemberian-obat-norm/'+no_rm, { headers })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return []
    });
    
  const dataObat = await axios.get(BACKEND_API+'/drug', { headers })
  .then((response) => {
    return response.data;
  })
  .catch((error) => {
    return []
  });
  return {
    user_data: user_cookies,
    pemberian_obat: pemberianObat,
    obat: dataObat
  }; 
});

export const actions = {
  default: async ({request, cookies, params}) => {
    const formData = await request.formData()
    const no_rm = params.slug
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
      if(name === 'obat'){
        let obatSelected = formData.get('obat').split("-Rp.")
        formValues['nama_obat'] = obatSelected[0];
        formValues['harga'] = obatSelected[1];
      }else{
        formValues[name] = value;
      }
    }

    const data = {
      no_rekam_medis: no_rm, 
      ...formValues
    }

    // Update Receipt
    let updatedReceipt = {}
    const receipt =  await axios.get(BACKEND_API+'/receipt-norm/'+no_rm, config)
    let res_obat_bahan_habis_pakai = receipt.data[0].obat_bahan_habis_pakai
      if(res_obat_bahan_habis_pakai.length !== 0){
        updatedReceipt = {
          obat_bahan_habis_pakai:[
            ...res_obat_bahan_habis_pakai,
            {
              deskripsi: data.nama_obat,
              tanggal: new Date().toISOString().split("T")[0],
              harga_satuan: data.harga,
              quantity:1
            }
          ]
        }
      }else{
        updatedReceipt = {
          obat_bahan_habis_pakai:{
            deskripsi: data.nama_obat,
            tanggal: new Date().toISOString().split("T")[0],
            harga_satuan: data.harga_obat,
            quantity:1
          }
        }
      }
      await axios.put(BACKEND_API+'/receipt-norm/'+no_rm, updatedReceipt , config);
    try {
      let dataLog = {
        'no_rekam_medis': no_rm,
        'keterangan': 'Mengisi pemberian obat pasien.',
        'nama': user_cookies.name,
        'role': user_cookies.role,
      }
      await axios.post(BACKEND_API+'/rekam-medis/log', dataLog ,config);

      await axios.post(BACKEND_API+'/rekam-medis/pemberian-obat', data, config)  
      
    } catch (error) {
      console.log(error)
      return fail(400, {
        error: true,
        message: error.response.data.message,
      }); 
    }
    
    throw redirect(303, `/rekam-medis/${no_rm}/pemberian-obat-pasien`)
  }
};