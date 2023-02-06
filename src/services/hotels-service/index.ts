import { notFoundError, paymentRequiredError } from "@/errors";
import enrollmentRepository from "@/repositories/enrollment-repository";
import hotelsRepository from "@/repositories/hotels-repository";
import ticketRepository from "@/repositories/ticket-repository";

async function getHotels(userId: number) {
  const enrollment = await enrollmentRepository.findWithAddressByUserId(userId);
  if (!enrollment) {
    throw notFoundError();
  }

  const ticket = await ticketRepository.findTicketByEnrollmentId(enrollment.id);
  if (!ticket) {
    throw notFoundError();
  }

  if (!ticket.TicketType.includesHotel || ticket.TicketType.isRemote || ticket.status !== "PAID") {
    throw paymentRequiredError();
  }
  const hotels = await hotelsRepository.findMany();
  if (!hotels) throw notFoundError();

  return hotels;
}

const hotelsService = {
  getHotels,
};

export default hotelsService;
