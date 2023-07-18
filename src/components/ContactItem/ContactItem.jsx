import './ContactItem.scss';
import PropTypes from 'prop-types';
import { useDeleteContactMutation } from 'redux/contacts/contactApi';

export const ContactItem = ({ contact }) => {
  const [deleteContact] = useDeleteContactMutation();

  return (
    <li className="phonebook_item">
      <span>{contact.name}</span>
      <span>{contact.number}</span>
      <button type="button" onClick={() => deleteContact(contact.id)}>
        Delete
      </button>
    </li>
  );
};

ContactItem.porpTypes = {
  contact: PropTypes.object.isRequired,
};
