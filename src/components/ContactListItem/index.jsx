import { useDispatch } from 'react-redux';
import { deleteContact } from 'components/services/API';
import css from './ContactListItem.module.css';

const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <li className={css.list_item}>
      <div className={css.list_item_wrapper}>
        <p>
          {contact.name}: {contact.phone}
        </p>
        <button onClick={() => dispatch(deleteContact(contact.id))}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default ContactListItem;
