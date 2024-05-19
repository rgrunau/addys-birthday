import { createTransport } from 'nodemailer';
import prisma from '@/lib/prisma';

const getEventInvitations = async (eventId: string) => { 
  return await prisma.invities.findMany({
    where: {
      eventId,
    },
  });
};

export const sendInvitationEmail = async (eventId: string) => {
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
      html: `<p>Hi ${invitation.name}, you are invited to Adeliaide's birthday party!</p>`,
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