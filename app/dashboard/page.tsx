import { Inter } from "next/font/google"

const inter = Inter({ weight: "400", style: "normal", subsets: ["latin"] });

export default function InviteDashboard() { 

  return (
    <div className={`${inter.className} w-full h-screen flex flex-col justify-center items-center xl:p-20`}>
      <div className="w-full max-w-[960px] text-black mx-auto h-screen flex justify-center">
        <div className="w-full flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold text-center">Invite People</h1>
          <p className="text-lg text-center mt-4"></p>
          <div className="w-full flex justify-center items-center mt-8">
            <input type="text" className="w-full bg-gray-100 p-4 rounded-lg" value="https://example.com/referral/invite" />
            <button className="bg-blue-500 text-white px-6 py-4 rounded-lg ml-4">Copy</button>
          </div>
        </div>
      </div>
    </div>
  )
}