import { createSlice, nanoid } from '@reduxjs/toolkit';

const defaultContacts = [
  { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
  { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
  { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
  { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: defaultContacts,
    filter: '',
  },
  reducers: {
    addContact(state, { payload }) {
      return { ...state, items: [...state.items, payload] };
    },
    deleteContact(state, { payload }) {
      return {
        ...state,
        items: state.items.filter(el => el.id !== payload),
      };
    },

    setFilter(state, { payload }) {
      return {
        ...state,
        filter: state.items.filter(el => el.id !== payload),
      };
    },
  },
});

export const { setFilter, deleteContact, addContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
