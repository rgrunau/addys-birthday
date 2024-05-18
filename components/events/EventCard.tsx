import Link from 'next/link'
import DateTimeComponent from '@/components/shared/DateTime'
import { Event } from '@/constants/interfaces'


interface EventCardProps { 
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  return (
    <li key={event.id}>
      <Link
        href={`/events/${event.id}`}
        className="flex flex-col w-full p-2 my-2 bg-gray-50 rounded-lg shadow-sm"
      >
        <div className="w-full border-b-2 border-slate-300">
          <h3 className="text-xl">{event.name}</h3>
        </div>
        <DateTimeComponent date={event.dateTime} />
        <div>
          <p className="text-lg">{event.location}</p>
        </div>
        <div>
          <p className="text-lg">{event.eventDescription}</p>
        </div>
        <div>
          <div>
            <h3>RSVP:</h3>
          </div>
          <div>
          </div>
        </div>
      </Link>
    </li>
  )
}