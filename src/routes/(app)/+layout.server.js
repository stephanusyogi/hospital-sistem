import { BACKEND_API } from '$env/static/private';
/** @type {import('./$types').LayoutServerLoad} */
export const load = (async ({ cookies }) => {
  const user_cookies = JSON.parse(cookies.get('user_data_access'));

  return {
    user_data: user_cookies,
    api_base: BACKEND_API
  };
}) 