import { create } from 'zustand';

interface IStore {
  message: string;
  setMessage: (message: string) => void;
}

export const useStore = create<IStore>((set) => ({
  message: 'test in Zustand',
  setMessage: (message) => set((state) => ({ ...state, message })),
}));
