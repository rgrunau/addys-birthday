import {create} from 'zustand';

type State = {
  localIntivites: { name: string, email: string }[];
  addInvitee: (name: string, email: string) => void;
}

export const useStore = create<State>((set) => ({
  localIntivites: [],
  addInvitee: (name, email) => set((state) => ({ localIntivites: [...state.localIntivites, { name, email }] }))
}));