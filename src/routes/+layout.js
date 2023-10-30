import { redirect } from '@sveltejs/kit'

// export const prerender = true;
export const load = async ({ route, url }) => {

    if(route.id?.includes('thank-you')){
        if(!url.searchParams.get('access')){
            throw redirect(307,'/');
        }
    }



}