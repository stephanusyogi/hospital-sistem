import { redirect } from '@sveltejs/kit';
import { BACKEND_API } from '$env/static/private';
import axios from 'axios';

/** @type {import('./$types').Actions} */

export function load({cookies}) {
  if(cookies.get('access')){
    throw redirect(302, '/')
  }
}

export const actions = {
  default: async ({cookies, request}) => {
    const formData = await request.formData()
    const email = formData.get("email")
    const password = formData.get("password")

    let user
    try {
      const response = await axios.post(BACKEND_API+'/login', 
      'email='+email+'&password='+password, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      user = response.data
    } catch (error) {
      return fail(400, {
        error: true,
        message: error.response.data.message,
      }); 
    }

    if(user){
      cookies.set("access", "true", {
        // send cookie for every page
        path: '/',
        // server side only cookie so you can't use `document.cookie`
        httpOnly: true,
        // only requests from same site can send cookies
        // https://developer.mozilla.org/en-US/docs/Glossary/CSRF
        sameSite: 'strict',
        // set cookie to expire after a month
        maxAge: 60 * 60 * 24 * 30})
      cookies.set("user_data_access", JSON.stringify(user), {
        path: '/',
        httpOnly: true,
        sameSite: 'strict',
        maxAge: 60 * 60 * 24 * 30})
      throw redirect(303, "/")
    }else{
      return {
        error:true,
        email,
        message: 'Silahkan Coba Kembali'
      }
    }
  }
};