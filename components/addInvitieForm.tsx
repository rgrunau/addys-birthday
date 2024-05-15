'use client'
import { Input } from "postcss"
import { useState } from "react"
import InputGroup from "./form-components/inputGroup"


export default function AddInvitieForm() { 
  const [count, setCount] = useState(1)


  return (
    <div className="w-full h-full flex flex-col justify-start items-start bg-slate-100">
      <form className="text-black text-xl mx-auto h-screen">
        <div className="w-full flex items-center justify-evenly">
          <InputGroup
            label={"First Name:"}
            type={"text"}
            placeholder={"Invitie's First Name"}
            name={"firstName"}
          />
          <InputGroup
            label={"email:"}
            type="email"
            placeholder={"Invitie's email"}
            name={"email"}
          />
        </div>
      </form>
    </div>
  )

}