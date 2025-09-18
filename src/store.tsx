import { create } from 'zustand';

interface IStore {
  // message
  message: string;
  setMessage: (message: string) => void;

  // colors
  colors: string[];
  deleteAllColors: (colors: string[]) => void;
  addColor: (color: string) => void;
  deleteColor: () => void;

  // Vowels
  deleteVowelsAndColorRed: () => void;

  // Current User Status:
  toggleCurrentUserStatusOnline: () => void;
  toggleCurrentUserStatusEmail: () => void;

  currentUserStatus: {
    isOnline: boolean;
    emailIsConfirmed: boolean;
  };
}

export const useStore = create<IStore>((set) => ({
  // message
  message: 'test in Zustand',
  setMessage: (message) => set((state) => ({ ...state, message })),

  // colors
  colors: ['blue', 'white', 'green', 'red'],

  // setColors: (colors) => set((state) => ({ ...state, colors })),
  deleteAllColors: (colors) => set((state) => ({ ...state, colors })),

  addColor: (color) => set((state) => ({ colors: [...state.colors, color] })),

  deleteColor: () =>
    set((state) => ({ state, colors: state.colors.slice(0, -1) })),

  // Vowels
  deleteVowelsAndColorRed: () =>
    set((state) => {
      const _state = { ...state };
      _state.message = _state.message.replace(/[aeiou]/gi, '');
      _state.colors = _state.colors.filter((m) => m !== 'red');
      return _state;
    }),

  // Objects => toggle current user status
  currentUserStatus: {
    isOnline: false,
    emailIsConfirmed: true,
  },

  toggleCurrentUserStatusOnline: () =>
    set((state) => {
      const _state = { ...state };
      _state.currentUserStatus.isOnline = !_state.currentUserStatus.isOnline;
      return _state;
    }),
  toggleCurrentUserStatusEmail: () =>
    set((state) => {
      const _state = { ...state };
      _state.currentUserStatus.emailIsConfirmed =
        !_state.currentUserStatus.emailIsConfirmed;
      return _state;
    }),
}));
