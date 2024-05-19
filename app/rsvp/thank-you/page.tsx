import Image from "next/image";
import PartyImage from "@/app/images/addy_bday_background.webp"

export default function RSVPSuccess () {
  return (
    <div className="w-full max-w-3xl min-h-screen mx-auto flex flex-col items-center text-slate-800">
      <div className="w-full mx-auto p-8 text-center mt-3 flex flex-col items-center justify-center">
        <div className="w-full mx-auto my-4 ">
          <Image src={PartyImage} alt="Celebration" />
        </div>
        <div>
          <h1 className="text-6xl">RSVP Success!</h1>
        </div>
        <div>
          <h2 className="text-5xl">Thanks for your response!</h2>
        </div>
      </div>
    </div>
  )
}