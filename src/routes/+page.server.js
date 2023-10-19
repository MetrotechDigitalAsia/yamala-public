import axios from "$lib/utils/axios"
import { error } from "@sveltejs/kit"

export const load = async () => {

    
    try {

        const { data } = await axios.get('/unit')
        
        return {
            units: data.data,
        }

    } catch (e) {
        throw error(500, e)
    }


}