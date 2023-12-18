import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import Loader from 'components/Loader';
import Error from 'components/Error';
import { selectError, selectIsLoading } from 'store/contacts/contactSelectors';
import { getContacts } from 'store/contacts/operations';
import css from './Container.module.css';

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && <Loader />}
      {error && <Error err={error} />}
      <ContactList />
    </div>
  );
};

export default App;
