import { redirect } from '@sveltejs/kit'

// export const prerender = true;
export const load = async ({ route }) => {

    if(route.id?.includes('thank-you')){
        if(!route.id?.includes('access=1')){
            throw redirect(307,'/');
        }
    }



}