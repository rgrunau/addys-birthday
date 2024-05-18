import { Invitie } from "@/constants/interfaces";


export default function InvitieChip({ invitee }: { invitee: Invitie }) { 

  return (
    <>
      {
        invitee.rsvpStatus === 'PENDING' && (
        
        <div
          key={invitee.id}
          className='flex justify-center items-center mr-2 my-2 border-2 
          py-2 px-2 rounded-md bg-gray-400 w-1/4 text-center'
        >
          <div>
            <div>{invitee.name}</div>
          </div>
        </div>
        )}
      {invitee.rsvpStatus === 'ACCEPTED' && (
        <div
          key={invitee.id}
          className='flex justify-center items-center mr-2 my-2 border-2 
          py-2 px-2 rounded-md bg-green-600 w-1/4 text-center shadow-sm text-gray-100'
        >
          <div>
            <div>{invitee.name}</div>
          </div>
        </div>
      )}
      {invitee.rsvpStatus === 'DECLINED' && (
        <div
          key={invitee.id}
          className='flex justify-center items-center mr-2 my-2 border-2 
          py-2 px-2 rounded-md bg-red-600 w-1/4 text-center shadow-sm text-gray-100'
        >
          <div>
            <div>{invitee.name}</div>
          </div>
        </div>
      )}
    </>
  )
}