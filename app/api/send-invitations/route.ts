import { NextResponse } from "next/server";
import { getEnvironmentURL } from "@/lib/provideURLS";
import { getEventDetails } from "@/lib/getEventDetails";
import { Resend } from 'resend';
import prisma from '@/lib/prisma';
import EmailTemplate from '@/components/email/EmailTemplate';

export const maxDuration = 60;

const getEventInvitations = async (eventId: string) => { 
  return await prisma.invities.findMany({
    where: {
      eventId,
    },
  });
};

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) { 
  const { eventId } = await req.json();
  const baseUrl = getEnvironmentURL();
  const event = await getEventDetails(eventId);
  if (!event) {
    throw new Error('Event not found');
  }
  const eventDate = new Date(event?.dateTime).toLocaleDateString();
  const eventLocation = event?.location;
  const eventAsset = event?.eventImage;
  
  const invitations = await getEventInvitations(eventId);

  console.log('invitations', invitations);
  console.log('event', event);
  const data =invitations.forEach(async (invitation) => { 
    const invitationEmail = invitation.email;
    const inviteeName = invitation.name;
    // const emailTemplate = render(EmailTemplate({ event, eventDate, baseUrl, eventId, eventLocation, inviteeName, invitationEmail, eventAsset  }));

    try {
      const { data, error } = await resend.emails.send({
        from: 'signe@addys-birthday.org',
        to: `${invitationEmail}`,
        subject: `You are invited to ${event.name}!`,
        react: EmailTemplate({ event, eventDate, baseUrl, eventId, eventLocation, inviteeName, invitationEmail, eventAsset  }),
      });

      if (error) {
        console.error(error);
        return Response.json({error: error.message}, {status: 500});
      }
      console.log('response resend data',data);
      return await Response.json({data}, {status: 200});
    } catch (error) {
      console.error(error);
      return Response.json({error: error}, {status: 500}); 
    }
  });
  const responseData = await data;
  console.log('post resned data: ', responseData );
  return new NextResponse(JSON.stringify(responseData), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });

}