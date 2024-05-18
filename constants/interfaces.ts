
export interface AcceptedInvite { 
  id: string;
  eventId: string;
  userId: string;
  attending: boolean;

}

export interface Event { 
  id: string;
  name: string;
  dateTime: Date;
  location: string;
  acceptedInvites: AcceptedInvite[];
  eventDescription: string;
}

export interface Invitie {
  id: string;
  eventId: string;
  name: string;
  email: string;
  rsvpStatus: string;
}