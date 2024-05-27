import { NextResponse } from "next/server";
import { getEnvironmentURL } from "@/lib/provideURLS";
import { getEventDetails } from "@/lib/getEventDetails";
import { Resend } from 'resend';
import prisma from '@/lib/prisma';
import EmailTemplate from '@/components/email/EmailTemplate';
import rateLimit from 'express-rate-limit';

export const maxDuration = 60;


const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: "Too many requests from this IP, please try again after 15 minutes",
});

const getEventInvitations = async (eventId: string) => { 
  return await prisma.invities.findMany({
    where: {
      eventId,
      emailSent: false,
    },
  });
};

const resend = new Resend(process.env.RESEND_API_KEY);

async function sendEmails(invitations: any, event: any) { 
  await limiter
  const baseUrl = getEnvironmentURL();
  const eventDate = new Date(event?.dateTime).toLocaleDateString();
  const eventLocation = event?.location;
  const eventAsset = event?.eventImage;
  const eventId = event?.id;
  //@ts-ignore
  const sendEmailPromises = invitations.map(async (invitation) => { 
    const invitationEmail = invitation.email;
    const inviteeName = invitation.name;

    try {
      const { data, error } = await resend.emails.send({
        from: 'signe@addys-birthday.org',
        to: invitationEmail,
        subject: `You are invited to ${event.name}!`,
        react: EmailTemplate({ event, eventDate, baseUrl, eventId, eventLocation, inviteeName, invitationEmail, eventAsset }),
      });

      if (error) {
        console.error(error);
        return { error: error.message };
      }

      console.log('response resend data', data);
      return { data };
    } catch (error) {
      console.error(error);
      //@ts-ignore
      return { error: error.message };
    }
  });

  return Promise.all(sendEmailPromises);
}

export async function POST(req: Request) { 
  const { eventId } = await req.json();

  const event = await getEventDetails(eventId);
  if (!event) {
    return new NextResponse(JSON.stringify({ error: 'Event not found' }), { status: 404 });
  }

  const invitations = await getEventInvitations(eventId);

  console.log('invitations', invitations);
  console.log('event', event);
  const results = await sendEmails(invitations, event);

  console.log('post resend data: ', results);
  return new NextResponse(JSON.stringify(results), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
