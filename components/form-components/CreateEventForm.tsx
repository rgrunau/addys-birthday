import InputGroup from "./inputGroup";
import TextArea from "./textArea";
import prisma from "@/lib/prisma";

export default function CreateEventForm() { 
  async function createEvent(formData: FormData) { 
  'use server'
  
  
  const response = await prisma.events.create({
    data: {
      name: formData.get('event-name') as string,
      date: formData.get('event-date') as string,
      time: formData.get('event-time') as string,
      location: formData.get('event-location') as string,
      eventDescription: formData.get('event-description') as string,
    }
  });
  console.log(response)
}

  return (
     <form className="flex flex-col" action={createEvent}>
            <div className="w-3/5 my-2">
              <InputGroup
                label="Event Name"
                type="text"
                placeholder="Event Name"
                name="event-name"
                required={true}
              />  
            </div>
            <div className="w-full flex flex-col lg:flex-row lg:justify-start lg:items-center">

              <div className="w-1/3 my-2">
                <InputGroup
                  label="Event Date"
                  type="date"
                  placeholder="Event Date"
                  name="event-date"
                  required={true}
                />
              </div>
              <div className="w-1/3 py-2 my-2 lg:ml-5">
                <InputGroup
                  label="Event Time"
                  type="time"
                  placeholder="Event Time"
                  name="event-time"
                  required={true}
                />
              </div>
            </div>
            <div className="w-3/5 my-2">
              <InputGroup
                label="Event Location"
                type="text"
                placeholder="Event Location"
                name="event-location"
                required={true}
              />
            </div>
            <div className="w-full my-2">
              <TextArea
                label="Event Description"
                placeholder="Event Description"
                name="event-description"
                required={true}
              />
            </div>
            <div>
              <button className="bg-blue-600 text-white py-2 px-4 rounded-lg mt-4">Create Event</button>
            </div>
          </form>
  )
}