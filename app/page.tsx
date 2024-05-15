import Image from "next/image";
import BDayIMage from "@/app/images/addy_bday_background.webp"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section className="z-10 w-full h-[90vh]items-center">
        <Image
          src={BDayIMage}
          alt="Addy's Birthday"
        />
      </section>
      <section className="z-10 flex flex-col py-24 w-[960px]">
        <div className="my-2 py-4">
          <h1 className="text-black text-center text-7xl">"It\'s Addy\'s Birthday"</h1>
        </div>
        <div className="my-2 py-4">
          <p className="text-black text-center text-3xl">Enter Your Email and click the RSVP button</p>
        </div>
        <form className="flex flex-col items-center justify-center py-6">
          <div className="w-full w-max-[700px] flex justify-center mb-8`">
            <input
              type="email"
              placeholder="Email"
              className="border border-black rounded-lg p-2 w-[675px]"
            />
          </div>
          <button className="bg-green-800 w-1/4 text-white rounded-lg px-4 py-2 mt-2">RSVP</button>
        </form>
      </section>
    </main>
  );
}
