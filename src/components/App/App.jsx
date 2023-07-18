import './App.scss';
import { ContactForm, Filter, ContactList } from 'components';

// Notiflix.Notify.init({ width: 'fit-content', fontSize: '20px' });
// const STOREG_KEY = 'contacts';

export const App = () => (
  <section className="phonebook">
    <h1>Phonebook</h1>
    <ContactForm />
    <h2>Contacts</h2>
    <Filter />
    <ContactList />
  </section>
);
