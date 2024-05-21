'use client';

export default function SendInviteSection() { 

  const handleClick = async () => { 
    const eventId = window.location.pathname.split('/')[2];
    const response = await fetch('/api/send-invitations', {
      method: 'POST',
      body: JSON.stringify({ eventId }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log('sendInvite', response);
  }
  return (
    <section className='w-full xl:w-2/3 flex items-center justify-center'>
        <div className='w-full'>
          <button
            className='w-full my-2 rounded-md bg-green-500 text-white px-4 py-2'
            onClick={handleClick}
          >
            Send Invites 
          </button>
        </div>
      </section>
  )
}