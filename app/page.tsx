import Image from "next/image";
import CoverImage from "@/app/images/cover.webp";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-between">
      
      <section className="flex flex-col z-10 w-full h-full relative items-center">
        <header className="w-full h-16 bg-transparent flex items-center justify-between px-4 z-10">
          <h1 className="text-2xl text-black font-bold">Addy's Birthday</h1>
        </header>
        <div className="w-full max-w-4xl my-28 z-10 flex items-center justify-start bg-slate-400/45 px-6 py-8 rounded-lg ">
          <div className="w-full">
            <h2 className="text-5xl text-black font-bold">Welcome</h2>
            <p className="text-2xl text-black font-normal">Addy's Birthday is a special event that you are invited to. We hope you can make it!</p>
            <p className="text-2xl text-black font-normal">An over the top app her Dad built because he doens't know when to stop</p>
          </div>
        </div>
        <div className="w-full absolute">  
          <Image
            src={CoverImage}
            alt="Addy's Birthday"
            className="object-contain"
          />
        </div>
      </section>
    </main>
  );
}
