import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';


export async function POST(req:Request) { 
  const { eventId, name, email } = await req.json();

  try {
    const attendee = await prisma.invities.create({
      data: {
        eventId: eventId,
        name: name,
        email: email,
        rsvpStatus: 'PENDING',
      },
    });

    if (attendee) {
      return new NextResponse(JSON.stringify(attendee), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  } catch (error) {
    console.error('server error',error);
    //@ts-ignore
    return new NextResponse(error.message, { status: 500 });
  }
  
}