import { create } from 'zustand';
import axios from 'axios';

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

  // TechBooks
  techBooks: ITechBook[];
  loadTechBooks: () => void;
  techBooksAreLoading: boolean;
  techBookSearch: string;
  setTechBookSearch: (message: string) => void;
}

export interface ITechBook {
  idCode: string;
  title: string;
  description: string;
  language: string;
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

  // TechBooks
  techBooks: [],
  loadTechBooks: () => {
    set((state) => {
      const _state = { ...state };
      _state.techBooksAreLoading = true;
      return _state;
    });
    setTimeout(async () => {
      const rawTechBooks = (
        await axios.get('https://edwardtanguay.vercel.app/share/techBooks.json')
      ).data;
      const _techBooks: ITechBook[] = [];
      rawTechBooks.forEach((rawTechBook: any) => {
        const techBook: ITechBook = {
          idCode: rawTechBook.idCode,
          title: rawTechBook.title,
          description: rawTechBook.description,
          language: rawTechBook.language,
        };
        _techBooks.push(techBook);
      });
      set((state) => {
        const _state = { ...state };
        _state.techBooks = _techBooks;
        _state.techBooksAreLoading = false;
        return _state;
      });
    }, 2000); // emulate long loading time
  },
  techBooksAreLoading: false,
  techBookSearch: '',
  setTechBookSearch: (techBookSearch: string) =>
    set((state) => ({ ...state, techBookSearch: techBookSearch })),
}));
