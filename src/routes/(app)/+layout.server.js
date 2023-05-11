/** @type {import('./$types').LayoutServerLoad} */
export const load = (async ({ cookies }) => {
  const user_data = cookies.get('user_data_access');

  return {
    user_data: JSON.parse(user_data)
  };
}) 