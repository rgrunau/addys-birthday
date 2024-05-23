import Image from "next/image";
import CoverImage from "@/app/images/cover.webp";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-between">
      
      <section className="z-10 w-full h-full relative items-center">
        <header className="w-full h-16 bg-transparent flex items-center justify-between px-4 z-10">
          <h1 className="text-2xl text-black font-bold">Addy's Birthday</h1>
        </header>
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
