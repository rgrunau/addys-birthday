import prisma from '@/lib/prisma';
import { createTransport } from 'nodemailer';
import { getEventDetails } from '@/lib/getEventDetails';

const getEventInvitations = async (eventId: string) => { 
  return await prisma.invities.findMany({
    where: {
      eventId,
    },
  });
};


export const sendInvitationEmail = async (eventId: string) => {
  const event = await getEventDetails(eventId);
  if (!event) {
    throw new Error('Event not found');
  }
  const eventDate = new Date(event?.dateTime).toLocaleDateString();
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

    const mailOptions = {
      from: 'robertgrunau@gmail.com',
      to: invitation.email,
      subject: "Adeliaide's Birthday Party!",
      text: `Hi ${invitation.name}, you are invited to Adeliaide's birthday party!`,
      html: `<p>Hi ${invitation.name}, you are invited to Adeliaide's birthday party!</p>
        <div>
          <h2>${event?.name}</h2>
          <p>When: ${eventDate}</p>
          <p>Where: ${event?.location}</p>
        </div>
        <div>
          <div>
            <p>RSVP: ${invitation.email}</p>
          </div>
          <div>
            <a href="http://localhost:3000/rsvp/${event.id}?${invitation.email}">RSVP</a>
          </div>
        </div>
      `,
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