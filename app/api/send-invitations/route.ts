import { NextResponse } from "next/server";
import { sendInvitationEmail } from "@/email-service/sendEmail";

export async function POST(req: Request) { 
  const { eventId } = await req.json();
  console.log('eventId', eventId);
  try {
    const sendInvite = await sendInvitationEmail(eventId);
    console.log('sendInvite', sendInvite);
    return new NextResponse(JSON.stringify(sendInvite), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('server error', error);
    //@ts-ignore
    return new NextResponse(error.message, { status: 500 });
  }
}