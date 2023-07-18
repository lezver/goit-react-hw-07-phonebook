import './ContactList.scss';
import { ContactItem } from 'components';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter.filter);

  const searchContact = () =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

  return (
    <ul className="phonebook__list">
      {searchContact().length !== 0 ? (
        searchContact().map(contact => (
          <ContactItem key={contact.id} contact={contact} />
        ))
      ) : (
        <p className="phonebook__info">Sorry, but you have no contacts</p>
      )}
    </ul>
  );
};
