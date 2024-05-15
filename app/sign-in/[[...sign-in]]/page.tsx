import { SignIn } from "@clerk/nextjs";
import { Inter } from "next/font/google";

const inter = Inter({ weight: "400", style: "normal", subsets: ["latin"] });
export default function SignInPage() { 

  return (
    <div className={`${inter.className} w-full h-screen flex flex-col justify-center items-center`}>
     <SignIn path="/sign-in" fallbackRedirectUrl="dashboard" />
    </div>
  )

}