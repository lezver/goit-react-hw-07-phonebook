import './ContactItem.scss';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice/contactsSlice';

export const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <li className="phonebook_item">
      <span>{contact.name}</span>
      <span>{contact.number}</span>
      <button
        type="button"
        onClick={() => dispatch(deleteContact(contact.name))}
      >
        Delete
      </button>
    </li>
  );
};

ContactItem.porpTypes = {
  contact: PropTypes.object.isRequired,
};
