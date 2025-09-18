import { create } from 'zustand';

interface IStore {
  // message
  message: string;
  setMessage: (message: string) => void;

  // colors
  colors: string[];
}

export const useStore = create<IStore>((set) => ({
  // message
  message: 'test in Zustand',
  setMessage: (message) => set((state) => ({ ...state, message })),

  // colors
  colors: ['blue', 'white', 'red'],
}));
