// import { prisma } from "$lib/server/prisma"
import axios from "$lib/utils/axios"
import { error } from "@sveltejs/kit"

export const load = async () => {

    
    try {

        const { data } = await axios.get('/unit')
        
        console.log(data)

        return {
            units: data.data,
        }

    } catch (e) {

        console.log(e)

        throw error(500, {
            message: e
        })

    }


}