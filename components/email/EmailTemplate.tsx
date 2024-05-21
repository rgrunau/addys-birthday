import PartyImage from '@/app/images/addy_bday_background.webp'
import Image from 'next/image';
import { Html, Head, Text, Button } from "@react-email/components";

interface EmailTemplateProps { 
  eventId: string;
  eventDate: string;
  eventLocation: string;
  eventName: string;
  invitationEmail: string;
  invitieName: string;
  baseUrl: string;
}

export default function EmailTemplate({ eventDate, eventId, eventLocation, eventName, invitieName, baseUrl, invitationEmail }: EmailTemplateProps) {
  

  return (
    <Html lang='en' dir='ltr'>
      <Head>
        <title>Adeliaide's Birthday Party</title>
      </Head>

      <Text
        style={{
          backgroundColor: '#f5f5f5',
          padding: '20px',
          fontFamily: 'Arial, sans-serif',
          color: '#333',
          fontSize: '16px',
        }}
      >
        Hi {invitieName}, you are invited to Adeliaide's birthday party!
        
          {eventName}
          When: {eventDate}
          Where: {eventLocation}
        
        <Button
          href={`http://${baseUrl}/rsvp/${eventId}?email=${invitationEmail}`}  
        >
          RSVP
        </Button>
      </Text>
    </Html>
  )
 }