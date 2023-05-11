import { redirect } from '@sveltejs/kit'

export function load() {
  throw redirect(302, '/')
}

export const actions = {
  default: async ({cookies}) => {
    // eat the cookie
    cookies.set('access', '', {
      path: '/',
      expires: new Date(0),
    })
    
    // eat the cookie
    cookies.set('user_data_access', '', {
      path: '/',
      expires: new Date(0),
    })

    // redirect the user
    throw redirect(302, '/login')
  }
};