import { inter } from "@/constants/fonts";
import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className={`${inter.className} flex flex-col items-center justify-center p-24`}>
      <div>
        <SignUp fallbackRedirectUrl="new-users" path="/sign-up" />;
      </div>
    </div>
  )
  
}