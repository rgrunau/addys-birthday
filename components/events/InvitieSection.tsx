'use client'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import InputGroup from '../form-components/inputGroup'

export default function InvitieSection({ invities }: { invities: any }) { 
  const [showForm, setShowForm] = useState(false)
  const [numberOfInvitees, setNumberOfInvitiees] = useState<number>(0)

  const handleShowForm = () => { 
    setShowForm(!showForm)
    setNumberOfInvitiees(numberOfInvitees + 1)
  }

  const handleAddInvitee = () => { 
    setNumberOfInvitiees(numberOfInvitees + 1)
  }

  return (
    <section>
      {invities.length === 0 && (
        <div>
          <div className='flex justify-between items-center pr-2'>
            <div>
              <div className='text-xl'>Invite some folks</div>
            </div>
            <div>
              <button onClick={!showForm ? handleShowForm : handleAddInvitee  }>
                <FontAwesomeIcon
                  icon={faUserPlus}
                  size='lg'
                  className='text-xl text-purple-500'
                />
              </button>
            </div>
          </div>
          {showForm && (
            <div >
              <form>
                {numberOfInvitees > 1 && [...Array(numberOfInvitees)].map((_, index) => (
                  <div key={index}>
                    <InputGroup
                      id={`inviteeName${index}`}
                      type='text'
                      name={`name${index}`}
                      placeholder='Name'
                      label='Name'
                      required
                    />
                    <InputGroup
                      id={`inviteeEmail${index}`}
                      type='email'
                      name={`email${index}`}
                      placeholder='Email'
                      label='Email'
                      required
                    />
                  </div>
                ))}
               
              </form>
            </div>
          )}
        </div>
      )}
    </section>
  )
}