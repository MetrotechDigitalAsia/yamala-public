import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const load = async () => {
  const units = await prisma.units.findMany();
  const selectedUnit = await prisma.units.findFirst();
  return {
    units,
    selectedUnit
  };
};
export {
  load
};
