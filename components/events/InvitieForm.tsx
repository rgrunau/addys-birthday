'use client'
import { FormEvent, useRef } from "react"
import InputGroup from "../form-components/inputGroup"


export default function InvitieForm() { 
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => { 

    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData.entries())
   
    const eventId = window.location.pathname.split('/')[2]
    try {
      const response = await fetch('/api/attendees-add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          eventId,
          name: data.name,
          email: data.email,
        }),
      })
      if (response.ok) {
        const newInvitee = await response.json()
        console.log(newInvitee)
        formRef.current?.reset()
      } else {
        throw new Error('Failed to add invitee')
      }
    } catch (error) {
      //@ts-ignore
      console.error(error.message)
    }
  }

  return (
    <form
      className='w-full xl:w-2/3'
      onSubmit={handleSubmit}
      ref={formRef}
    >
        <div>
          <InputGroup
            id="inviteeName"
            type='text'
            name="name"
            placeholder='Name'
            label='Name'
            required
          />
          <InputGroup
            id="inviteeEmail"
            type='email'
            name="email"
            placeholder='Email'
            label='Email'
            required
          />
      </div>
      <div className='w-full my-8 py-4flex items-center justify-center'>
        <div>
          <button
            type='submit'
            className='w-full my-2 rounded-md bg-purple-500 text-white px-4 py-2'
          >
            Add Invitee
          </button>
        </div>
      </div>
    </form>
  )
}