import DateTimeComponent from "@/components/shared/DateTime";
import prisma from "@/lib/prisma";

const getEventDetails = async (id: string) => { 
  const event = await prisma.events.findFirst({
    where: {
      id,
      dateTime: {
        gt: new Date(),
      },
     },
    select: {
      id: true,
      name: true,
      eventDescription: true,
      dateTime: true, 
      location: true,
      invities: {
       where: { eventId: id },
      },
    },
  });
  return event;

}

export default async function IndEvent({ params }: { params: { id: string } }) {
  const event = await getEventDetails(params.id);
  console.log(event);
  return (
    <div className="w-full h-[90vh] rounded-lg p-2">
      <div className="w-full">
        <h1 className="text-3xl font-semibold text-slate-900">{event?.name}</h1>
      </div>
      <div className="w-full">
        <DateTimeComponent date={event?.dateTime} />
      </div>
      <div>
        <p className="text-lg text-slate-700">{event?.location}</p>
      </div>
      <div>
        <p className="text-lg text-slate-700">{event?.eventDescription}</p>
      </div>
      
      {event?.invities.length === 0 && (
        <div className="w-full">
          <h2 className="text-xl text-slate-900">invite some folks</h2>
        </div>
      )}
    </div>
  );
}