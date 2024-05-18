
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import InvitieForm from './InvitieForm'

export default function InvitieSection({ invities }: { invities: any }) { 
 
 

  

  return (
    <section>
      <div>
        <div className='text-xl my-4'>Invities</div>
        <div className='flex items-center justify-start flex-wrap'>
          {invities?.length > 0 && invities.map((invitee: any) => (
            <div
              key={invitee.id}
              className='flex justify-center items-center mr-2 my-2 border-2 border-gray-200 py-2 px-2 rounded-md bg-gray-400 w-1/4 text-center'
            >
              <div>
                <div>{invitee.name}</div>
              </div>
            </div>
          ))}
        </div>
        </div>
        <div className='mt-8'>
          <div className='flex justify-between items-center pr-2'>
            <div>
              <div className='text-xl'>Invite some folks</div>
            </div>
            <div>
              <button>
                <FontAwesomeIcon
                  icon={faUserPlus}
                  size='lg'
                  className='text-xl text-purple-500'
                />
              </button>
            </div>
          </div>
          <div >
            <InvitieForm/>
          </div>
        </div>
    </section>
  )
}