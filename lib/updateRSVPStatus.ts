import prisma from "./prisma";


export const updateRSVPStatus = async (eventId: string, inviteeId: string, status: string) => {
  try {
    const invitee = await prisma.invities.update({
      where: {
        id: inviteeId,
        eventId: eventId
      },
      data: {
        rsvpStatus: status
      }
    });
    return invitee;
  } catch (error) {
    console.log(error);
  }
}