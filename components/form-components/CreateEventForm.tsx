'use client';
import { useRouter } from "next/navigation";
import InputGroup from "./inputGroup";
import TextArea from "./textArea";

export default function CreateEventForm() { 
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => { 
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    const eventDateTimestamp = new Date(`${data.eventDate} ${data.eventTime}`)
    const newEvent = {
      name: data.eventName,
      dateTime: eventDateTimestamp,
      location: data.eventLocation,
      eventDescription: data.eventDescription,
    };

    const response = await fetch('/api/create-event', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newEvent),
    });

    if (response.ok) {
      const eventId = await response.json();
      router.push(`/events/${eventId}`);
    } else {
      console.error('Failed to create event');
    }

    console.log('response:', response);
}

  return (
     <form className="flex flex-col" onSubmit={handleSubmit}>
        <div className="w-3/5 my-2">
          <InputGroup
            id="eventName"
            label="Event Name"
            type="text"
            placeholder="Event Name"
            name="eventName"
            required={true}
          />  
        </div>
        <div className="w-full flex flex-col lg:flex-row lg:justify-start lg:items-center">
          <div className="w-1/3 my-2">
            <InputGroup
              id="eventDate"
              label="Event Date"
              placeholder="Event Date"
              name="eventDate"
              required={true}
              type="date"
            />
          </div>
          <div className="w-1/3 py-2 my-2 lg:ml-5">
            <InputGroup
              id="eventTime"
              label="Event Time"
              type="time"
              placeholder="Event Time"
              name="eventTime"
              required={true}
            />
          </div>
        </div>
        <div className="w-3/5 my-2">
          <InputGroup
            id="eventLocation"
            label="Event Location"
            type="text"
            placeholder="Event Location"
            name="eventLocation"
            required={true}
          />
        </div>
        <div className="w-full my-2">
          <TextArea
            id="eventDescription"
            label="Event Description"
            placeholder="Event Description"
            name="eventDescription"
            required={true}
      
          />
        </div>
        <div>
          <button className="bg-blue-600 text-white py-2 px-4 rounded-lg mt-4">Create Event</button>
        </div>
      </form>
  )
}