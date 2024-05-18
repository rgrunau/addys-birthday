
import { FormEvent, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { useStore } from '@/store/store'
import InvitieForm from './InvitieForm'

export default function InvitieSection({ invities }: { invities: any }) { 
 
 

  

  return (
    <section>
      <div>
        <div className='text-xl'>Invities</div>
        {invities.length > 0 && invities.map((invitee: any) => (
          <div key={invitee.id}>
            <div>
              <div>{invitee.name}</div>
              <div>{invitee.email}</div>
            </div>
          </div>
        ))}
        </div>
        <div>
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