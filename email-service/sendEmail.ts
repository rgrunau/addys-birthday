
import { getEventDetails } from '@/lib/getEventDetails';
import { getEnvironmentURL } from '@/lib/provideURLS';
import { Resend } from 'resend';
import prisma from '@/lib/prisma';
import EmailTemplate from '@/components/email/EmailTemplate';

const getEventInvitations = async (eventId: string) => { 
  return await prisma.invities.findMany({
    where: {
      eventId,
    },
  });
};

const resend = new Resend(process.env.RESEND_API_KEY);



export const sendInvitationEmail = async (eventId: string) => {
  const baseUrl = getEnvironmentURL();
  const event = await getEventDetails(eventId);
  if (!event) {
    throw new Error('Event not found');
  }
  const eventDate = new Date(event?.dateTime).toLocaleDateString();
  const eventLocation = event?.location;
  const eventAsset = event?.eventImage;
  
  const invitations = await getEventInvitations(eventId);

 
  const data =invitations.forEach(async (invitation) => { 
    const invitationEmail = invitation.email;
    const inviteeName = invitation.name;
    // const emailTemplate = render(EmailTemplate({ event, eventDate, baseUrl, eventId, eventLocation, inviteeName, invitationEmail, eventAsset  }));

    try {
      const { data, error } = await resend.emails.send({
        from: 'robertgrunau@hey.com',
        to: `${invitationEmail}`,
        subject: 'You are invited to Addy\'s Birthday',
        react: EmailTemplate({ event, eventDate, baseUrl, eventId, eventLocation, inviteeName, invitationEmail, eventAsset  }),
      });

      if (error) {
        return Response.json({error: error.message}, {status: 500});
      }
      return Response.json({data}, {status: 200});
    } catch (error) {
      console.error(error);
      return Response.json({error: error}, {status: 500}); 
    }
  });
  console.log(data);
  return data;
}