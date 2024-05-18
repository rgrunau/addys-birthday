
export interface AcceptedInvite { 
  id: string;
  eventId: string;
  userId: string;
  attending: boolean;
}

export type Event = {
  id: string;
  name: string;
  dateTime: Date;
  location: string;
  eventDescription: string;
  createdAt: Date;
  updatedAt: Date;
  acceptedInvites?: AcceptedInvite[]; // replace any[] with the actual type if known
  rejectedInvites?: AcceptedInvite[]; // replace any[] with the actual type if known
};

export interface Invitie {
  id: string;
  eventId: string;
  name: string;
  email: string;
  rsvpStatus: string;
}