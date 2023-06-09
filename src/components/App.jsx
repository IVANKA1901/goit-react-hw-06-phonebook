import React from 'react';

import { ListContact } from './ListContact/ListContact';
import { FormContacts } from './FormContact/FormContact';
import { Container } from './Container/Container';

import { Filter } from './Filter/Filter';
import { useSelector } from 'react-redux';
import { getContacts } from '../store/selectors';

export function App() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getContacts);

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   const parsedContacts = JSON.parse(window.localStorage.getItem('contacts'));

  //   if (parsedContacts) {
  //     setContacts(parsedContacts);
  //   }
  // }, []);

  // useEffect(() => {
  //   window.localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // const deleteContact = contactId => {
  //   setContacts(prevState => prevState.filter(el => el.id !== contactId));
  // };

  // const addContact = ({ name, number }) => {
  //   const newContact = { name, number, id: nanoid() };

  //   if (
  //     contacts.find(
  //       contact => contact.name.toLowerCase() === name.toLowerCase()
  //     )
  //   ) {
  //     alert(`${name} is already exist in the contacts`);
  //   } else if (contacts.find(contact => contact.number === number)) {
  //     alert(`${number} is already exist in the contacts`);
  //   } else if (name.trim() === '' || number.trim === '') {
  //     alert('Please enter the contact`s name and phone number');
  //   } else {
  //     setContacts(prevState => [...prevState, newContact]);
  //   }
  // };

  // const changeFilter = e => {
  //   setFilter(e.target.value);
  // };

  // const showContact = () => {
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(filter.toLowerCase())
  //   );
  // };
  return (
    <Container>
      <h1>Phonebook</h1>
      <FormContacts />
      <h1>Contacts</h1>
      {contacts.length > 1 && <Filter />}
      {contacts.length > 0 ? (
        <ListContact />
      ) : (
        <p>There is no contacts left. Please add some.</p>
      )}
    </Container>
  );
}
