import { Html, Head, Text, Button, Img } from "@react-email/components";


export default function EmailTemplate(props) {
  

  return (
    <Html lang='en' dir='ltr'>
      <Head>
        <title>Adeliaide's Birthday Party</title>
      </Head>
      <Img href={props.eventAsset} />
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
        Hi {props.invitieName}, you are invited to Adeliaide's birthday party!
        
      </Text>
      <Text>
        When: {props.eventDate}
      </Text>
      <Text>
        Where: {props.eventLocation}
      </Text>
      <Button
        href={`http://${props.baseUrl}/rsvp/${props.eventId}?email=${props.invitationEmail}`}  
      >
        RSVP
      </Button>
    </Html>
  )
 }