'use client'
import { useRouter } from "next/navigation"

interface RSVPSectionProps { 
  eventId: string
  inviteeId: string

}
export default function RSVPSection({ eventId, inviteeId}: RSVPSectionProps) { 
  const router = useRouter();
  const handleRSVP = async (status: string) => { 
    try {
      const response = await fetch('/api/rsvp-send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          eventId,
          inviteeId,
          status
        })
      });
      if (response.ok) { 
        router.push('/rsvp/thank-you')
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <div className="w-full max-w-xl mx-auto flex items-center justify-center gap-8">
      <div className="py-2">
        <button
          onClick={() => handleRSVP('ACCEPTED')}
          id="accept-button"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          RSVP
        </button>
      </div>
      <div className="py-2">
        <button
          onClick={() => handleRSVP('DECLINED')}
          id="decline-button"
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Decline
        </button>
      </div>
    </div>
  )
}