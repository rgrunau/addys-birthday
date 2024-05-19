import prisma from '@/lib/prisma';

export const getEventDetails = async (eventId: string) => { 
  return await prisma.events.findUnique({
    where: {
      id: eventId,
    },
  });
};