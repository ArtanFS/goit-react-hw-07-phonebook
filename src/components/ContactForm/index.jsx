import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'store/contacts/contactSelectors';
import { addContact } from 'store/contacts/operations';
import css from './ContactForm.module.css';

const ContactForm = () => {
  const [value, setValue] = useState({
    name: '',
    phone: '',
  });
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const isDuplicate = contacts.some(
      ({ name }) => value.name.toLowerCase() === name.toLowerCase()
    );
    if (isDuplicate) {
      alert(`${value.name} is already in contacts.`);
      return;
    }
    dispatch(addContact(value));
    setValue({ name: '', phone: '' });
  };

  const handleChange = ({ target: { value, name } }) => {
    setValue(prev => ({ ...prev, [name]: value }));
  };

  return (
    <form className={css.contact_form} onSubmit={handleSubmit}>
      <div className={css.input_wrapper}>
        <div className={css.contact_form_item}>
          <label htmlFor="inputName">Name</label>
          <input
            name="name"
            type="text"
            id="inputName"
            value={value.name}
            onChange={handleChange}
            required
            pattern="^[a-zA-Zа-яА-ЯіІїЇєЄ’]+(([' \-][a-zA-Zа-яА-ЯіІїЇєЄ’])?[a-zA-Zа-яА-ЯіІїЇєЄ’]*)*$"
            placeholder="Enter Name"
          />
        </div>
        <div className={css.contact_form_item}>
          <label htmlFor="inputPhone">Phone</label>
          <input
            name="phone"
            type="tel"
            id="inputPhone"
            value={value.phone}
            onChange={handleChange}
            required
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            placeholder="012-345-6789"
          />
        </div>
      </div>
      <button type="submit">Add contact</button>
    </form>
  );
};

export default ContactForm;
