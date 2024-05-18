import { createTransport } from 'nodemailer';
import { NextResponse } from 'next/server';
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
      user: 'your-email@gmail.com',
      pass: 'your-password',
    },
  })
  console.log('invitations', invitations);
  return new NextResponse(JSON.stringify(invitations), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
  // const mailOptions = {
  //   from: 'robertgrunau@gmail.com',
  //   to: email,
  //   subject: "Adeliaide's Birthday Party!",
  //   text: `Hi ${name}, you are invited to Adeliaide's birthday party!`,
  //   html: `<p>Hi ${name}, you are invited to Adeliaide's birthday party!</p>`,
  // };
};