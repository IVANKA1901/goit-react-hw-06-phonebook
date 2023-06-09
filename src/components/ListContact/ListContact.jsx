// import PropTypes from 'prop-types';
import css from './ListContact.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContactAction } from 'store/actions';
import { getContacts } from 'store/selectors';

export function ListContact() {
  const contacts = useSelector(getContacts);

  const dispatch = useDispatch();

  const onDeleteContact = id => {
    dispatch(deleteContactAction(id));
  };

  return (
    <ul className={css.list}>
      {contacts.map(contact => (
        <li key={contact.id} className={css.item}>
          <p>
            {contact.name}: {contact.number}
          </p>
          <button
            className={css.btn}
            type="button"
            onClick={() => onDeleteContact(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

// ListContact.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
//   onDeleteContact: PropTypes.func.isRequired,
// };
