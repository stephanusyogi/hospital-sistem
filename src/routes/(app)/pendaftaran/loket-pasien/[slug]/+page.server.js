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
  
  const patient = await axios.get(BACKEND_API+'/patient-norm/'+no_rm, { headers })
    .then((response) => {
      return response.data[0];
    })
    .catch((error) => {
      return []
    });
    
  const bpjs = await axios.get(BACKEND_API+'/bpjs-norm/'+no_rm, { headers })
    .then((response) => {
      if (response.data) {
        return response.data[0];
      } else {
        return response.data; 
      }
    })
    .catch((error) => {
      return []
    });
    
  return {
    user_data: user_cookies,
    patient: patient,
    bpjs: bpjs
  };
});

export const actions = {
  default: async ({request, cookies, params}) => {
    const formData = await request.formData()
    const no_rm = params.slug
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
      const currentDate = new Date();
      const year = currentDate.getFullYear();
      const month = String(currentDate.getMonth() + 1).padStart(2, '0');
      const day = String(currentDate.getDate()).padStart(2, '0');
      const formattedDate = `${year}-${month}-${day}`;

      const responsePasien = await axios.get(BACKEND_API+'/patient-norm/'+no_rm, config);
      const dataPasien = responsePasien.data[0];
      const informasiPasien = {...dataPasien, ...formValues, tgl_masuk:formattedDate}
      try {
        let dataLog = {
          'no_rekam_medis': no_rm,
          'keterangan': 'Mengisi formulir identitas dan informasi pasien rawat inap.',
          'nama': user_cookies.name,
          'role': user_cookies.role,
        }
        
        let dataReceipt = {
          administrasi: {
            deskripsi: 'Pendaftaran Layanan Rawat Inap',
            tanggal: new Date().toISOString().split("T")[0],
            harga_satuan: '100000',
            quantity:1
          }
        }

        await axios.post(BACKEND_API+'/rekam-medis/log', dataLog ,config)
          .catch(error => {
            console.error(error);
            return fail(400, {
              error: true,
              message: error.response.data.message,
            }); 
          });

        await axios.post(BACKEND_API+'/rekam-medis/informasi-pasien', informasiPasien, config)
          .catch(error => {
            console.error(error);
            return fail(400, {
              error: true,
              message: error.response.data.message,
            }); 
          });
        
        await axios.put(BACKEND_API+'/receipt-norm/'+no_rm, dataReceipt , config)
          .catch(error => {
            console.error(error);
            return fail(400, {
              error: true,
              message: error.response.data.message,
            }); 
          });
        
      } catch (error) {
        return fail(400, {
          error: true,
          message: error.response.data.message,
        }); 
      }
    } catch (error) {
      console.log(error)
      return fail(400, {
        error: true,
        message: error.response.data.message,
      }); 
    }
    
    throw redirect(303, '/pendaftaran/admisi-rawat-inap')
  }
};
