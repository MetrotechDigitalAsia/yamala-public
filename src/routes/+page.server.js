import { prisma } from "$lib/server/prisma"
import { error } from "@sveltejs/kit"

export const load = async () => {

    
    try {
        const units = await prisma.units.findMany()
        const selectedUnit = await prisma.units.findFirst()
        
        return {
            units,
            selectedUnit
        }
    } catch (e) {

        throw error(500, {
            message: e
        })

    }


}