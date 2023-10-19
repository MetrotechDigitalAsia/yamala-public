import { prisma } from "$lib/server/prisma"

export const load = async () => {

    let data

    try {
        data = await prisma.galleries.findMany()
    } catch (error) {
        console.log(error)
        data = false
    }


    return {
        gallery: data
    }

}