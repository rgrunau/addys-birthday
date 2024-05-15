import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";


export async function POST(req: Request){
  try {
    const responseBody = await req.json();
    if (responseBody === undefined || responseBody === null ) {
      throw new Error('Invalid request body');
      
    }
    const newEventResponse = await prisma.events.create({
      data: {
        ...responseBody
      }
    }) 
    console.log(newEventResponse);
    if (newEventResponse === undefined || newEventResponse === null) {
      throw new Error('Failed to create event');
    }
    if (newEventResponse) {
      return new NextResponse(JSON.stringify(newEventResponse.id), {
        status: 200, 
        headers: { 'Content-Type': 'application/json' }, 
      });
    }
    
  } catch (error) {
    console.error(error);
    //@ts-ignore
    return new NextResponse(error.message, { status: 500 });
  }


}