import { prisma } from "@/config";

async function findMany() {
  return await prisma.hotel.findMany();
}

const hotelsRepository = {
  findMany,
};

export default hotelsRepository;
