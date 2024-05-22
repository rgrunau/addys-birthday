import { Html, Head, Text, Button, Img } from "@react-email/components";


export default function EmailTemplate(props) {
  

  return (
    <Html lang='en' dir='ltr'>
      <Head>
        <title>{props.event.name }</title>
      </Head>
      <img src={props.eventAsset} alt='Adeliaide Birthday Party' />
      <Text
        style={{
          backgroundColor: '#fff',
          padding: '20px',
          fontFamily: 'Arial, sans-serif',
          color: '#333',
          fontSize: '32px',
          lineHeight: '1.5',
          textAlign: 'center',
        }}
      >
        Hi {props.inviteeName},
        
      </Text>
      <Text>
        When: {props.eventDate}
      </Text>
      <Text>
        Where: {props.eventLocation}
      </Text>
      <Text>
        {props.event.eventDescription}
      </Text>
      <Button
        style={{
          backgroundColor: '#f01d71',
          color: '#fff',
          padding: '10px 20px',
          borderRadius: '5px',
          display: 'block',
          margin: '0 auto',
          textDecoration: 'none',
          textAlign: 'center',
          width: '250px',
        }}
        href={`http://${props.baseUrl}/rsvp/${props.eventId}?email=${props.invitationEmail}`}  
      >
        RSVP
      </Button>
    </Html>
  )
 }