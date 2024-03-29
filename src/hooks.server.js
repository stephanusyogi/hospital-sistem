import {redirect} from "@sveltejs/kit"

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
  
  const access = event.cookies.get("access") === "true"
  if (!access && event.route.id?.startsWith("/(app)")){
    throw redirect(302, "/login")
  }
  const response = await resolve(event);

  return response;
}
