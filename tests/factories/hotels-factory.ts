import faker from "@faker-js/faker";
import { prisma } from "@/config";

export async function createHotel() {
  return prisma.hotel.create({
    data: {
      name: faker.lorem.word()+"_hotel",
      image: faker.image.imageUrl(),
    },
  });
}
