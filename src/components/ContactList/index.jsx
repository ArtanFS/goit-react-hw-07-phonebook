import { useSelector } from 'react-redux';
import ContactListItem from '../ContactListItem';
import { selectVisibleContacts } from 'store/contacts/contactSelectors';
import css from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);

  return (
    <ul className={css.list}>
      {contacts.map(el => (
        <ContactListItem key={el.id} contact={el} />
      ))}
    </ul>
  );
};

export default ContactList;
