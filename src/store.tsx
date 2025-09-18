import { create } from 'zustand';

interface IStore {
  // message
  message: string;
  setMessage: (message: string) => void;

  // colors
  colors: string[];
  setColors: (colors: string[]) => void;
  addColor: (color: string) => void;
  deleteColor: () => void;
}

export const useStore = create<IStore>((set) => ({
  // message
  message: 'test in Zustand',
  setMessage: (message) => set((state) => ({ ...state, message })),

  // colors
  colors: ['blue', 'white', 'green', 'red'],

  setColors: (colors) => set((state) => ({ ...state, colors })),

  addColor: (color) =>
    set((state) => ({ ...state, colors: [...state.colors, color] })),

  deleteColor: () =>
    set((state) => ({ ...state, colors: state.colors.slice(0, -1) })),
}));
