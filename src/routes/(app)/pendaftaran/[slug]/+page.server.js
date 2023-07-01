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
      return response.data;
    })
    .catch((error) => {
      return []
    });
    
  const informasiPasien = await axios.get(BACKEND_API+'/rekam-medis/informasi-pasien-norm/'+no_rm, { headers })
    .then((response) => {
      return response.data[0];
    })
    .catch((error) => {
      return []
    });
    
  const doctors = await axios.get(BACKEND_API+'/doctor', { headers })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return []
    });
    
  const rooms = await axios.get(BACKEND_API+'/room', { headers })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return []
    });
  
  return {
    user_data: user_cookies,
    patient: patient,
    informasi_pasien: informasiPasien,
    dokter: doctors,
    room: rooms
  };

});

export const actions = {
  default: async ({request, cookies, params}) => {
    const formData = await request.formData()

    const kodeICD10 = formData.getAll('kodeICD10[]');
    const descICD10 = formData.getAll('descICD10[]');
    const kodeICD9 = formData.getAll('kodeICD9[]');
    const descICD9 = formData.getAll('descICD9[]');

    const icd_10 = kodeICD10.map((kode, index) => {
      return {
        kode: kodeICD10[index],
        desc: descICD10[index]
      };
    });

    const icd_9 = kodeICD9.map((kode, index) => {
      return {
        kode: kodeICD9[index],
        desc: descICD9[index]
      };
    });

    formData.getAll('kodeICD10[]').forEach(() => {
      formData.delete('kodeICD10[]');
    });
    formData.getAll('descICD10[]').forEach(() => {
      formData.delete('descICD10[]');
    });

    formData.getAll('kodeICD9[]').forEach(() => {
      formData.delete('kodeICD9[]');
    });
    formData.getAll('descICD9[]').forEach(() => {
      formData.delete('descICD9[]');
    });

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
    
    // Get Dokter By Id
    const responseDokter = await axios.get(BACKEND_API+'/doctor/'+formValues.id_dpjp, config);
    const dokter = responseDokter.data
    delete formValues.id_dpjp

    // Get Room By Id
    const responseRoom = await axios.get(BACKEND_API+'/room/'+formValues.id_kamar, config);
    const room = responseRoom.data
    delete formValues.id_kamar

    let data = {
      ...formValues,
      'no_rekam_medis': no_rm,
      'icd_10': icd_10,
      'icd_9': icd_9,
      'id_dokter': dokter._id,
      'dpjp': dokter.name,
      'id_kamar': room._id,
      'nama_kamar': room.nama_ruangan,
      'jenis_kamar': dokter.kelas,
    }


    try {
      let dataLog = {
        'no_rekam_medis': no_rm,
        'keterangan': 'Mengisi formulir pemeriksaan awal.',
        'nama': user_cookies.name,
        'role': user_cookies.role,
      }
      await axios.post(BACKEND_API+'/rekam-medis/log', dataLog , config);

      await axios.post(BACKEND_API+'/rekam-medis/pemeriksaan-awal', data , config);
    } catch (error) {
      return fail(400, {
        error: true,
        message: error.response.data.message,
      }); 
    }
    
    throw redirect(303, `/rekam-medis/${no_rm}`)
  }
};