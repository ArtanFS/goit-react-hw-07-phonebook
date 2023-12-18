import { createSlice } from '@reduxjs/toolkit';
import {
  addContact,
  deleteContact,
  getContacts,
} from 'store/contacts/operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const handleFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};

const handleFulfilledGetAll = (state, { payload }) => {
  state.items = payload;
};

const handleFulfilledAdd = (state, { payload }) => {
  state.items.push(payload);
};

const handleFulfilledDelete = (state, { payload }) => {
  const index = state.items.findIndex(contact => contact.id === payload.id);
  state.items.splice(index, 1);
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(getContacts.fulfilled, handleFulfilledGetAll)
      .addCase(addContact.fulfilled, handleFulfilledAdd)
      .addCase(deleteContact.fulfilled, handleFulfilledDelete)
      .addMatcher(action => action.type.endsWith('pending'), handlePending)
      .addMatcher(action => action.type.endsWith('rejected'), handleRejected)
      .addMatcher(action => action.type.endsWith('fulfilled'), handleFulfilled);
  },
});

export const contactReducer = contactSlice.reducer;
