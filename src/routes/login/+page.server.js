import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
const dummyUsers = [
  {
    "name" : "Stephanus Yogi",
    "username" : "stephanusyogi",
    "password" : "test123",
    "role" : "Bidan",
  }
];

export function load({cookies}) {
  if(cookies.get('access')){
    throw redirect(302, '/')
  }
}

export const actions = {
  default: async ({cookies, request}) => {
    const formData = await request.formData()
    const username = formData.get("username")
    const password = formData.get("password")

    if (username==="stephanusyogi" && password==="test123") {
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
      throw redirect(302, "/")
    }

    return {
      username,
      message: "Username atau password tidak valid!"
    }
  }
};