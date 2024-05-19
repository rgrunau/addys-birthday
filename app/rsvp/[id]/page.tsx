import RSVPSection from "@/components/rsvp/RSVPSection";
import prisma from "@/lib/prisma"
interface checkInviteProps { 
  userEmail: string
  id: string
}
const checkEmail = async ({userEmail, id}: checkInviteProps)=> { 
  try {
      const invitee = await prisma.invities.findUnique({
      where: {
        email: userEmail,
        eventId: id
      }
    });
    return invitee;
  } catch (error) {
    console.log(error);
  }
  
}

const getEventDetails = async (eventId: string) => { 
  return await prisma.events.findUnique({
    where: {
      id: eventId,
    },
  });
}
  
interface RSVPPageProps { 
  params: { id: string }
  searchParams: { email: string }
}

export default async function EventRSVPPage({ params, searchParams }: RSVPPageProps) { 
  const { id } = params;
  const userEmail = searchParams.email;
  const invitee = await checkEmail({ userEmail, id });
  const event = await getEventDetails(id);
  const eventDate = event &&  new Date(event?.dateTime).toLocaleDateString();
  return (
    <>
      {
        invitee && event && (
          <div className="w-full min-h-screen flex flex-col items-center">
            <div className="w-full max-w-5xl mx-auto p-8 text-center mt-3">
              <h1 className="text-6xl">Hello {invitee?.name}!</h1>
            </div>
            <div className="w-full max-w-xl mx-auto p-8 text-center mt-3">
              <h2 className="text-4xl">You are invited to {event?.name}!</h2>
              <p className="text-2xl">When: {eventDate}</p>
              <p className="text-2xl">Where: {event?.location}</p>
              <p className="text-2xl">Where: {event?.eventDescription}</p>
            </div>
            <RSVPSection
              eventId={id}
              inviteeId={invitee?.id}
            />
          </div>
        )
      }
      
    </>
  )
}