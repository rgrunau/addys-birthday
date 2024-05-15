import { Inter } from "next/font/google"
import AddInvitieForm from "@/components/addInvitieForm";

const inter = Inter({ weight: "400", style: "normal", subsets: ["latin"] });

export default function InviteDashboard() { 

  return (
    <div className={`${inter.className} text-black w-full h-screen flex flex-col justify-start`}>
      dashboard
    </div>
  )
}