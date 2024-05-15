import prisma from "@/lib/prisma";

const getEvent = async (id: string) => { 
  const event = await prisma.events.findFirst({ where: { id } });
  return event;

}

export default async function IndEvent({ params }: { params: { id: string } }) {
  const event = await getEvent(params.id);
  console.log(event);
  return (
    <div className="w-full h-[90vh] rounded-lg">
      events page
      {event?.name}
    </div>
  );
}