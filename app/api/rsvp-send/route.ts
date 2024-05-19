import { updateRSVPStatus } from "@/lib/updateRSVPStatus";
import { NextResponse } from "next/server";
export async function POST(req: Request) {
    let success = false;
    try {
      
      const body = await req.json();
      const { eventId, inviteeId, status } = body;
      const response = await updateRSVPStatus(eventId, inviteeId, status);
      
      if (response) {
        success = true;
        return new NextResponse(JSON.stringify(success), {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
        });
      }


    } catch (error) {
      return NextResponse.error();
    }
}

