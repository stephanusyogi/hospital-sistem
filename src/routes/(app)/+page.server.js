import { BACKEND_API } from '$env/static/private';
import axios from 'axios';
import { fail, redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export const load = (async ({ cookies }) => {
  const user_cookies = JSON.parse(cookies.get('user_data_access'));
  const headers = {
    'Accept': '*/*',
    'Authorization': 'Bearer '+user_cookies.token
  };
  const dashboard = await axios.get(BACKEND_API+'/dashboard', {headers})
  .then((response) => {
    return response.data;
  })
  .catch((error) => {
    return error.response.data;
  });

  return {
    user_data: user_cookies,
    dashboard: dashboard
  };
}) 