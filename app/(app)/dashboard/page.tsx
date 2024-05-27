import { inter } from "@/constants/fonts";
import prisma from "@/lib/prisma";
import EventCard from "@/components/events/EventCard";

const getEvents = async () => {
  const events = await prisma.events.findMany()
  return events
}


export default async function InviteDashboard() { 
  const events = await getEvents()
  return (
    <div className={`${inter.className} text-black w-full h-screen flex flex-col justify-start mt-3`}>
      {events.length === 0 && (
        <div className="my-3">
          <h2>You currently have no active events. </h2>
        </div>
      )}
      {events.length > 0 && (
        <div className="">
          <h2 className="text-2xl">Up Coming Events</h2>
          <ul className="w-full py-2">
            {events.map((event) => (
              <EventCard
                key={event.id}
                event={event}
              />
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}