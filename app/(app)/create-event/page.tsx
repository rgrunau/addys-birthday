import CreateEventForm from "@/components/form-components/CreateEventForm";
import InputGroup from "@/components/form-components/inputGroup";
import TextArea from "@/components/form-components/textArea";


export default function CreateEvent() {
  return (
    <div className="w-full lg:w-3/5 lg:mx-auto min-h-[90vh] text-slate-800 rounded-lg my-2 flex flex-col p-2 bg-white shadow-sm">
      <div className="w-10/12 rounded-lg p-5">
        <div className="border-b-2 border-slate-500/45 px-2 py-4">
          <h1 className="text-2xl">Create Event</h1>
        </div>
        <div className="w-full mt-4">
         <CreateEventForm />
        </div>
      </div>
    </div>
  );
}