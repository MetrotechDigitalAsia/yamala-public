import axios from "$lib/utils/axios"
import { error } from "@sveltejs/kit"

export const load = async () => {

    try {

        const { data } = await axios.get('/galleryy')

        return {
            gallery: data
        }

    } catch (err) {
        throw error(500, err)
    }

}