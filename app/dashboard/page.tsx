import { Inter } from "next/font/google"
import AddInvitieForm from "@/components/addInvitieForm";

const inter = Inter({ weight: "400", style: "normal", subsets: ["latin"] });

export default function InviteDashboard() { 

  return (
    <div className={`${inter.className} w-full h-screen flex flex-col justify-center items-center lg:flex-row xl:justify-between xl:items-start xl:p-12`}>
      <div className="w-full xl:w-1/2 text-black h-screen flex justify-start">
        <AddInvitieForm />
      </div>
      <aside className="w-full xl:w-1/2 h-full flex justify-center items-center pt-5 bg-blue-500">
        <div className="w-full h-full flex flex-col justify-start items-center">
          <h1 className="text-2xl text-white font-bold">Invited Guests</h1>
        </div>
      </aside>
    </div>
  )
}