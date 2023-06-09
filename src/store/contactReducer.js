// import initialState from './initialState';
// import { ADD_CONTACT, DELETE_CONTACT, CONTACT_FILTER } from './types';

// const contactsReducer = (state = initialState, { type, payload }) => {
//   switch (type) {
//     case ADD_CONTACT:
//       return { ...state, contacts: [...state.contacts, payload] };

//     case DELETE_CONTACT:
//       return {
//         ...state,
//         contacts: state.contacts.filter(el => el.id !== payload),
//       };
//     case CONTACT_FILTER:
//       return {
//         ...state,
//         filter: state.contacts.filter(el =>
//           el.contactName.toLowerCase().includes(payload.toLowerCase())
//         ),
//       };
//     default:
//       return state;
//   }
// };

// export default contactsReducer;
