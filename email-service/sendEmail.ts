import { createTransport } from 'nodemailer';
import { getEventDetails } from '@/lib/getEventDetails';
import { getEnvironmentURL } from '@/lib/provideURLS';
import { render } from '@react-email/render' 
import prisma from '@/lib/prisma';
import EmailTemplate from '@/components/email/EmailTemplate';

const getEventInvitations = async (eventId: string) => { 
  return await prisma.invities.findMany({
    where: {
      eventId,
    },
  });
};


export const sendInvitationEmail = async (eventId: string) => {
  const baseUrl = getEnvironmentURL();
  const event = await getEventDetails(eventId);
  console.log('event', event);
  if (!event) {
    throw new Error('Event not found');
  }
  const eventDate = new Date(event?.dateTime).toLocaleDateString();
  const eventLocation = event?.location;
  const eventAsset = event?.eventImage;
  
  const invitations = await getEventInvitations(eventId);

  const transporter = createTransport({
    service: 'gmail',
    auth: {
      user: `${process.env.GMAIL_USER}`,
      pass: `${process.env.GMAIL_PASS}`,
    },
  })
  console.log('invitations', invitations);
  invitations.forEach((invitation) => { 
    const invitationEmail = invitation.email;
    const inviteeName = invitation.name;
    const emailTemplate = render(EmailTemplate({ event, eventDate, baseUrl, eventId, eventLocation, inviteeName, invitationEmail, eventAsset  }));

    const mailOptions = {
      from: 'robertgrunau@gmail.com',
      to: invitation.email,
      subject: `You're invited to ${event.name}!`,
      html: emailTemplate
    };
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('sendMail error', error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  });
};