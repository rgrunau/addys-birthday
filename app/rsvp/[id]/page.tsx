import { inter } from "@/constants/fonts";
import prisma from "@/lib/prisma"
interface checkInviteProps { 
  email: string
  id: string
}
const checkEmail = async ({email, id}: checkInviteProps)=> { 
  try {
    const invitee = await prisma.invities.findUnique({
    where: {
      email: email,
      eventId: id
    },
    select: {
      email: true,
      eventId: true
    }
    });
    return invitee;
  } catch (error) {
    console.log(error);
  }
  
}
  
interface RSVPPageProps { 
  params: { id: string }
  searchParams: string
}

export default async function EventRSVPPage({ params, searchParams }: RSVPPageProps) { 
  // const hasEmail = await checkEmail(params.id);
  const { id } = params;
  console.log(searchParams);
  return (
    <div className="w-full">
      rsvp page
      {id}
    </div>
  )
}