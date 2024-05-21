import InvitieForm from './InvitieForm'
import InvitieChip from './InvitieChip'
import SendInviteSection from './SendInviteSection';

export default async function InvitieSection({ invities }: { invities: any }) { 
  
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
      <SendInviteSection />
    </>
  )
}