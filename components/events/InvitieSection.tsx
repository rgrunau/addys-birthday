import InvitieForm from './InvitieForm'
import InvitieChip from './InvitieChip'

export default function InvitieSection({ invities }: { invities: any }) { 
 
 

  

  return (
    <>
      <section>
        <div>
          <div className='text-xl my-4'>Invities</div>
          <div className='flex items-center justify-start flex-wrap'>
            {invities?.length > 0 && invities.map((invitee: any) => (
              <InvitieChip key={invitee.id} invitee={invitee} />
            ))}
          </div>
          </div>
          <div className='mt-8'>
            <div className='flex justify-between items-center pr-2'>
              <div>
                <div className='text-xl'>Invite some folks</div>
              </div>
            </div>
            <div >
              <InvitieForm/>
            </div>
          </div>
      </section>
      <section className='w-full flex items-center justify-center'>
        <div className='w-full'>
          <button
            className='w-full my-2 rounded-md bg-green-500 text-white px-4 py-2'
          >
            Send Invites 
          </button>
        </div>
      </section>
    </>
  )
}