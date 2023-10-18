import { prisma } from "$lib/server/prisma"

export const load = async () => {

    const units = await prisma.units.findMany()
    const selectedUnit = await prisma.units.findFirst()

    return {
        units,
        selectedUnit
    }

}