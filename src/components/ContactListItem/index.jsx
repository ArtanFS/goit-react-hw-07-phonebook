import { useDispatch } from 'react-redux';
import { MdClose } from 'react-icons/md';
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
        <button
          className={css.btn}
          onClick={() => dispatch(deleteContact(contact.id))}
        >
          <MdClose size={24} />
        </button>
      </div>
    </li>
  );
};

export default ContactListItem;
