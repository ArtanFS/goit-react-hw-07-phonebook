import { contactReducer } from './contacts/contactSlice';
import { filterReducer } from './filter/filterSlice';

export const reducer = {
  contacts: contactReducer,
  filter: filterReducer,
};
