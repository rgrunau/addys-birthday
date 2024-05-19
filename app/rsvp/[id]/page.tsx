import prisma from "@/lib/prisma"
const checkEmail = async (id: string)=> { 
  let verified = false;
  // const invitee = await prisma.invities.findUnique({
  //   where: {

  //     eventId: id
  //   },
  // });
  // if (invitee) {
  //   verified = true;
  }

export default async function EventRSVPPage({ params }: { params: { id: string } }) { 
  // const hasEmail = await checkEmail(params.id);
  const { id } = params;
  console.log(params);
  return (
    <div className="w-full">
      rsvp page
      {id}
    </div>
  )
}