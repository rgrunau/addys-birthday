import { inter } from "@/constants/fonts";
import prisma from "@/lib/prisma";

const getEvents = async () => {
  const events = await prisma.events.findMany()
  return events
}


export default async function InviteDashboard() { 
  const events = await getEvents()
  console.log(events)
  return (
    <div className={`${inter.className} text-black w-full h-screen flex flex-col justify-start mt-10`}>
      {events.length === 0 && (
        <div className="my-3">
          <h2>You currently have no active events. </h2>
        </div>
      )}
    </div>
  )
}